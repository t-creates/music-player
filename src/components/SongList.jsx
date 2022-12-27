import React from 'react';
// import { useSelector } from 'react-redux';
import SongCard from './SongCard';

// Temporary imports till data if fetched from api
// import data from '../data/songs';

const SongList = ({ songs }) => {
  return (
    <div>
      {/* Songs Container */}
      <div className="flex flex-wrap gap-6 justify-center items-center overflow-y-auto">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            image={song.images?.coverart}
            title={song.title}
            subTitle={song.subtitle}
            idx={i}
          />
        ))}
      </div>
    </div>
  );
};
export default SongList;
