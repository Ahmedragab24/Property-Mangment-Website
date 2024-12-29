import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { account, databases } from "@/utils/appwrite/appwriteClient";
import { AppwriteException, Query } from "appwrite";
import { city } from "@/interfaces";

interface UserData {
  email: string;
  password: string;
  name?: string;
}

interface PropertyFilterArgs {
  city: city | undefined;
  guests: number;
}

interface PaginationArgs {
  page: number;
  pageSize: number;
}

// interface FileUpload {
//   file: File;
// }

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
          "unique()",
          userData.email,
          userData.password,
          userData.name
        );
      },
      invalidatesTags: ["User"],
    }),

    // Login User
    loginUser: builder.mutation({
      query: (userData: Omit<UserData, "name">) => async () => {
        return await account.createSession(userData.email, userData.password);
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
            [Query.limit(pageSize), Query.offset((page - 1) * pageSize)]
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
            [Query.equal("room", room)]
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
          "unique()",
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
          "unique()",
          data
        );
      },
    }),

    // Upload Image
    // uploadImage: builder.mutation({
    //   query:
    //     ({ file }: FileUpload) =>
    //     async () => {
    //       return await storage.createFile(
    //         process.env.NEXT_PUBLIC_BUCKET_ID!,
    //         "unique()",
    //         file
    //       );
    //     },
    // }),

    // // Delete Image
    // deleteImage: builder.mutation({
    //   query: (id: string) => async () => {
    //     return await storage.deleteFile(process.env.NEXT_PUBLIC_BUCKET_ID!, id);
    //   },
    // }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetPropertiesQuery,
  useGetOnePropertyQuery,
  useFilterPropertiesByRoomQuery,
  useFilterPropertiesByCityAndGuestsQuery,
  useCreatePropertyMutation,
  useCreateLandlordMutation,
  // useUploadImageMutation,
  // useDeleteImageMutation,
} = apiSlice;
