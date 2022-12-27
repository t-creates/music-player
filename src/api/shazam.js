import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiHeaders1 = {
  'X-RapidAPI-Key': process.env.REACT_APP_SC_RAPID_API_KEY,
  'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
};

const createRequest = (url) => ({ url, headers: rapidApiHeaders1 });

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam.p.rapidapi.com/' }),
  endpoints: (builder) => ({
    // List all available charts by cities, countries, and genres
    getChartList: builder.query({
      query: () => createRequest('charts/list'),
    }),
    // Get all popular songs in specific chart
    getChartSongs: builder.query({
      query: (listId) => createRequest(`charts/track?locale=en-US&listId=${listId}&pageSize=20&startFrom=0`),
    }),
    // List related ones to a specific song.
    getRecommendedSongs: builder.query({
      query: (key) => createRequest(`songs/list-recommendations?key=${key}`),
    }),
    // Search for songs & artists
    getSearchList: builder.query({
      query: (searchTerm) => createRequest(`search?term=${searchTerm}&locale=en-US&offset=0&limit=10`),
    }),
  }),
});

export const { useGetChartListQuery, useGetChartSongsQuery, useGetRecommendedSongsQuery, useGetSearchListQuery } = shazamApi;
