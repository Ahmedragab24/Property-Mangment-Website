import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["User", "properties", "property", "filtering"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  endpoints: (builder) => ({
    ////////////////////// Register User ////////////////////////
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/local/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    /////////////////////// Login User ////////////////////////
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/local",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    /////////////////////// Get Properties ////////////////////////
    getProperties: builder.query({
      query: () => ({
        url: "/properties?populate=image",
      }),
      providesTags: ["properties"],
    }),

    /////////////////////// Get One Property ////////////////////////
    getOneProperty: builder.query({
      query: (id) => ({
        url: `/properties/${id}?populate=image&populate=imageGroup`,
      }),
      providesTags: ["property"],
    }),

    ////////////////////// Filtering By Room //////////////////////
    filterPropertiesByRoom: builder.query({
      query: (room) => ({
        url: `/properties?filters[room][$eq]=${room}&populate=image`,
      }),
      providesTags: ["filtering"],
    }),

    ////////////////////// Filtering By City //////////////////////
    filterPropertiesByCityAndGuests: builder.query({
      query: (args) => {
        const { city, guests } = args;
        return {
          url: `/properties?filters[city][$contains]=${city}&filters[NumPerson][$eq]=${guests}&populate=image`,
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
