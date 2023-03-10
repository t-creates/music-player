import { Link } from 'react-router-dom';

const DetailsHeader = ({ songData, artistData, artistId }) => {
  const artist = artistData?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-r from-gray-500/75 to-transparent opacity-40  sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId ? artistData?.attributes?.artwork?.url
              .replace('{w}', '500')
              .replace('{h}', '500')
              : songData?.images?.coverart
          }
          alt="art"
          className="sm:w-48 w-28 sm:h-40 h-28 rounded-full object-cover border-2 shadow-xl shadow-black ml-2"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base font-bold text-gray-200 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className="text-base font-bold text-gray-200 mt-2">
            {artistId
              ? artist?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
