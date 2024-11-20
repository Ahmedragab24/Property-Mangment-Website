import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["User", "properties", "property"],
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
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetPropertiesQuery,
  useGetOnePropertyQuery,
} = apiSlice;
