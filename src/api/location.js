import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Error code: 422 "unknown Plan" not sure how to specify which plan I want

export const userLocation = createApi({
  reducerPath: 'userLocation',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    // getIpAddress: builder.query({
    //   getIpAddress: () => 'https://api.ipify.org?format=json',
    // }),
    getUserLocation: builder.query({
      query: () => `https://geo.ipify.org/api/v2?apiKey=${process.env.REACT_APP_IP_GEO_KEY}`,
    }),
  }),
});

export const { useGetUserLocationQuery } = userLocation;
