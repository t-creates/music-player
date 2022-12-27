import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Navbar, Sidebar, Player } from '../../components/index';
import ElementSelector from '../../components/ElementSelector';
import SongList from '../../components/SongList';
import './Explore.css';

// Api imports
import { useGetChartListQuery, useGetChartSongsQuery } from '../../api/shazam';

const Explore = () => {
  const [listId, setListId] = useState('ip-country-chart-US');
  const { selectedCountryName } = useSelector((state) => state.selectedCountry);
  const { data, error, isFetching } = useGetChartListQuery();
  const { data: chartSongs, isFetching: isLoadingTracks } = useGetChartSongsQuery(selectedCountryName.length > 1 ? selectedCountryName : listId);

  if (isFetching || isLoadingTracks) {
    return (
      <div className="flex justify-center">
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader loader-inner" />
          </div>
        </div>
      </div>
    );
  }

  // Error
  if (error) return 'An error has occured.';

  return (
    <div className="">
      <Navbar className="sticky top-0" />
      <Sidebar className="" />
      <ElementSelector data={data.countries} />
      <div className="h-10 w-25 px-4 mt-2 text-red-500 text-lg animate-pulse">
        THE HOTTEST TRACKS FROM COUNTRY...
      </div>
      <SongList songs={chartSongs?.tracks} />
    </div>
  );
};

export default Explore;
