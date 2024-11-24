import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["User", "properties", "property", "filtering"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL_API }),
  endpoints: (builder) => ({
    ////////////////////// Register User ////////////////////////
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/api/auth/local/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    /////////////////////// Login User ////////////////////////
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/api/auth/local",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    /////////////////////// Get Properties ////////////////////////
    getProperties: builder.query({
      query: () => ({
        url: "/api/properties?populate=image",
      }),
      providesTags: ["properties"],
    }),

    /////////////////////// Get One Property ////////////////////////
    getOneProperty: builder.query({
      query: (id) => ({
        url: `/api/properties/${id}?populate=image&populate=imageGroup`,
      }),
      providesTags: ["property"],
    }),

    ////////////////////// Filtering By Room //////////////////////
    filterPropertiesByRoom: builder.query({
      query: (room) => ({
        url: `/api/properties?filters[room][$eq]=${room}&populate=image`,
      }),
      providesTags: ["filtering"],
    }),

    ////////////////////// Filtering By City //////////////////////
    filterPropertiesByCityAndGuests: builder.query({
      query: (args) => {
        const { city, guests } = args;
        return {
          url: `/api/properties?filters[city][$contains]=${city}&filters[NumPerson][$eq]=${guests}&populate=image`,
        };
      },
      providesTags: ["filtering"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetPropertiesQuery,
  useGetOnePropertyQuery,
  useFilterPropertiesByRoomQuery,
  useFilterPropertiesByCityAndGuestsQuery,
} = apiSlice;
