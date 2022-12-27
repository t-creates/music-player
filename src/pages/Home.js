/* eslint-disable */
import React, { useState, UseEffect } from 'react';
import { useSelector } from 'react-redux';


// Api imports
    // List all available charts by cities, countries, and genres
import { useGetChartListQuery } from '../api/shazam';
  // User Location
// import { useGetUserLocationQuery } from '../api/location';

const Home = () => {
  const { data, error, isFetching } = useGetChartListQuery();

  if (isFetching) {
    return (
      <div className="flex justify-center">
        <h1>Loading</h1>
      </div>
    );
  }

  // Error
  if (error) return 'An error has occured.';

  return (
    <>
    </>
  );
}

export default Home;
