import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.query({
      query: (credentials) => ({
        url: "public/api/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "public/api/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Export the generated hooks
export const { useLazyLoginQuery ,useRegisterMutation } = authApiSlice;
