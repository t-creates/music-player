import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const shazamCoreApiHeaders = {
  'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_SC_RAPID_API_KEY,
};

const createRequest = (url) => ({ url, headers: shazamCoreApiHeaders });

export const scApi = createApi({
  reducerPath: 'scApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam-core.p.rapidapi.com/v1/' }),
  endpoints: (builder) => ({
    // Artist Details: Songs, Albums, Top Songs
    getArtistDetails: builder.query({
      query: (artistId) => createRequest(`artists/details?artist_id=${artistId}`),
    }),
    // Top Songs By Country
    getChartByCountry: builder.query({
      query: (countryCode) => createRequest(`charts/country?country_code=${countryCode}`),
    }),
    // Chart By Genre & Country
    getChartByGenreAndCountry: builder.query({
      query: (countryCode, genreCode) => createRequest(`charts/genre-country?genre=${genreCode}?country_code=${countryCode}`),
    }),
  }),
});

export const {
  useGetArtistDetailsQuery, useGetChartByCountryQuery, useGetChartByGenreAndCountryQuery,
} = scApi;

