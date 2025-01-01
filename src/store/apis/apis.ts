import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { account, databases } from "@/utils/appwrite/appwriteClient";
import { AppwriteException, ID, Query } from "appwrite";
import {
  BookingData,
  city,
  LoginForm,
  PaginationArgs,
  PropertyFilterArgs,
  UserData,
} from "@/interfaces";

const appwriteBaseQuery: BaseQueryFn<
  () => Promise<unknown>,
  unknown,
  { message: string }
> = async (queryFn) => {
  try {
    const result = await queryFn();
    return { data: result };
  } catch (error: unknown) {
    if (error instanceof AppwriteException) {
      return { error: { message: error.message } };
    }
    return { error: { message: "An unknown error occurred" } };
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: appwriteBaseQuery,
  tagTypes: ["User", "LandLord", "Properties", "Property", "Filtering"],
  endpoints: (builder) => ({
    // Register User
    registerUser: builder.mutation({
      query: (userData: UserData) => async () => {
        return await account.create(
          ID.unique(),
          userData.email,
          userData.password,
          userData.name
        );
      },
      invalidatesTags: ["User"],
    }),

    // Login User
    loginUser: builder.mutation({
      query: (userData: LoginForm) => async () => {
        return await account.createEmailPasswordSession(
          userData.identifier,
          userData.password
        );
      },
      invalidatesTags: ["User"],
    }),

    // Get Properties
    getProperties: builder.query({
      query:
        ({ page, pageSize }: PaginationArgs) =>
        async () => {
          return await databases.listDocuments(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_PROPERTY_COLLECTION!,
            [
              Query.limit(pageSize),
              Query.offset((page - 1) * pageSize),
              Query.orderDesc("date"),
            ]
          );
        },
      providesTags: ["Properties"],
    }),

    // Get One Property
    getOneProperty: builder.query({
      query: (id: string) => async () => {
        return await databases.getDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_PROPERTY_COLLECTION!,
          id
        );
      },
      providesTags: ["Property"],
    }),

    // Filter Properties By Room
    filterPropertiesByRoom: builder.query({
      query: (room) => async () => {
        try {
          const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_PROPERTY_COLLECTION!,
            [Query.equal("room", room), Query.orderDesc("date")]
          );
          return response;
        } catch (error) {
          console.error("Error fetching properties by room:", error);
          throw error;
        }
      },
      providesTags: ["Filtering"],
    }),

    // Filter Properties By City And Guests
    filterPropertiesByCityAndGuests: builder.query({
      query:
        ({ city, guests }: PropertyFilterArgs) =>
        async () => {
          try {
            const queries = [];
            if (city !== undefined) {
              queries.push(Query.equal("city", city));
            }
            queries.push(Query.equal("NumPerson", guests));
            Query.orderDesc("date");

            const response = await databases.listDocuments(
              process.env.NEXT_PUBLIC_DATABASE_ID!,
              process.env.NEXT_PUBLIC_PROPERTY_COLLECTION!,
              queries
            );
            return response;
          } catch (error) {
            console.error("Error filtering properties:", error);
            throw error;
          }
        },
      providesTags: ["Filtering"],
    }),

    // Filter Properties By City And Guests
    filterPropertiesByCity: builder.query({
      query: (city: city) => async () => {
        try {
          const queries = [];
          if (city !== undefined) {
            queries.push(Query.equal("city", city));
            Query.orderDesc("date");
          }
          const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_PROPERTY_COLLECTION!,
            queries
          );
          return response;
        } catch (error) {
          console.error("Error filtering properties:", error);
          throw error;
        }
      },
      providesTags: ["Filtering"],
    }),

    // Create Landlord
    createLandlord: builder.mutation({
      query: (data: Record<string, unknown>) => async () => {
        return await databases.createDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_LANDLORD_COLLECTION!,
          ID.unique(),
          data
        );
      },
    }),

    // Create Property
    createProperty: builder.mutation({
      query: (data: Record<string, unknown>) => async () => {
        return await databases.createDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_PROPERTY_COLLECTION!,
          ID.unique(),
          data
        );
      },
    }),

    // Create Booking
    createBooking: builder.mutation({
      query: (data: BookingData) => async () => {
        return await databases.createDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_BOOKING_COLLECTION!,
          ID.unique(),
          data
        );
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetPropertiesQuery,
  useGetOnePropertyQuery,
  useFilterPropertiesByRoomQuery,
  useFilterPropertiesByCityQuery,
  useFilterPropertiesByCityAndGuestsQuery,
  useCreatePropertyMutation,
  useCreateLandlordMutation,
  useCreateBookingMutation,
} = apiSlice;
