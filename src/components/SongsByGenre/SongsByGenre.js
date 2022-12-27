// import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { asyncFetchSongsByGenre } from '../redux/features/songsSlice';
// import { BsFillPlayCircleFill } from 'react-icons/bs';
// import { songs as dummySongs } from '../data/songs';
// import { GENRES } from '../data/genres';

// // some notes...
// // I decided to comment out the actual API call after testing it works as to avoid hitting the HARD 500 limit
// // Currently using dummy data that matches the json shape of a call to asyncFetchSongsByGenre('POP')

// function SongsByGenre() {
//   // const dispatch = useDispatch();
//   // const { songs } = useSelector((state) => state.songs);

//   // const handleFetchSongsByGenre = (genre) => {
//   //   dispatch(asyncFetchSongsByGenre(genre));
//   // };

//   // useEffect(() => {
//   //   dispatch(asyncFetchSongsByGenre('POP'));
//   // }, []);
//   console.log(dummySongs);
//   return (
//     <div className="w-full h-full bg-gray-900 flex flex-col items-center justify-start overflow-scroll scrollbar-hide">
//       {/* buttons */}
//       <div className="flex flex-wrap gap-4 w-full justify-center">
//         {GENRES.map((genre, i) => (
//           <button
//             type="button"
//             className="h-8 py-5 px-3 m-2 flex justify-center items-center border-gray-200 rounded-full border bg-none text-white shadow-lg transition-all transform duration ease-in-out active:scale-[.98]"
//             key={i}
//             // eslint-disable-next-line
//             onClick={() => handleFetchSongsByGenre(genre)}>
//             {genre}
//           </button>
//         ))}
//       </div>
//       {/* Songs Container */}
//       <div className="flex flex-wrap gap-4 mt-2 justify-center">
//         {/* eslint-disable-next-line */}
//         {dummySongs &&
//           dummySongs?.map((song) => (
//             <div className="bg-black text-white h-64 w-64 square p-4 mb-4 cursor-pointer relative group">
//               <div className="absolute top-0 left-0 hidden group-hover:inline-block group-hover:bg-[#00000074] w-full h-full z-10" />
//               <div className="absolute hidden group-hover:inline-block left-[6rem] top-[6rem] z-[1000000]">
//                 <BsFillPlayCircleFill size={60} />
//               </div>
//               <img src={song.images.background} alt="song" className="h-48 w-full object-fill" />
//               <h3 className="text-sm truncate">{song.title}</h3>
//               <h4 className="text-sm truncate">{song.title}</h4>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default SongsByGenre;
