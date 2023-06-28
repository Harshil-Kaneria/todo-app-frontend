import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const profileApiSlice = createApi({
  reducerPath: "profileApi",
  baseQuery,
  endpoints: (builder) => ({
    profileInfo: builder.query({
      query: (credentials) => ({
        url: "api/user-details",
        method: "GET",
        headers: {
            'x-token': credentials, // Add the 'x-token' header using the provided token
        },
      }),
    }),
  }),
});

// Export the generated hooks
export const { useLazyProfileInfoQuery } = profileApiSlice;
