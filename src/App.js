// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { PlayerLayout } from './components';

// import { Home, Explore, TopLocal, Artists, ArtistDetails, SongDetails } from './pages';
// /*
// Set up our potential routes.
// */
// function App() {
//   return (
//     <div className="w-full h-full">
//       <PlayerLayout />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/artists" element={<Artists />} />
//         <Route path="/artistdetails" element={<ArtistDetails />} />
//         <Route path="/toplocal" element={<TopLocal />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/songdetails" element={<SongDetails />} />
//       </Routes>
//     </div>

/* eslint-disable */
import React, {useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store } from '../../project1_team2_repository/src/redux/store';

import { Navbar, Sidebar, PlayerBar, Start, PlayerLayout } from './components';
import { Home, Explore, TopLocal, Artists, ArtistDetails, SongDetails } from './pages';
import data from './data/songs';

function App() {
  const audioRef = useRef (null);
  const[songs, setSongs] = useState(data());
  const[currentSong, setCurrentSong] = useState (songs[0]);
  const [isPlaying, setIsPlaying] = useState (false);
  const [songInfo, setSongInfo] = useState ({currentTime:0, duration: 0, animationPercentage: 0 });
  const [libraryStatus, setLibraryStatus] = useState (false);
  const timeUpdateHandler =(e) =>{
    const current = e.target.currentTime;
    
    const duration = e.target.duration;
   
   //Calculate percentage
    const roundedCurrent = Math.round(current);
    
    const roundedDuration = Math.round(duration);
    
    const animation = Math.round((roundedCurrent/roundedDuration)*100);
    
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage:animation })
  };
  
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong (songs[(currentIndex+1) % songs.length]);
    if (isPlaying) audioRef.current.play();
    };
  
  return (
  <>
    <Routes>
    <Route path = "/" element= {<Start />} />
    <Route path="/home" element={
      <PlayerLayout 
        audioRef={audioRef}
          setIsPlaying ={setIsPlaying}
          isPlaying= {isPlaying}
          currentSong ={currentSong}
          setSongInfo = {setSongInfo}
          songInfo = {songInfo}
          songs = {songs}
          setCurrentSong = {setCurrentSong}
          setSongs = {setSongs}
          libraryStatus = {libraryStatus}/>} />
    <Route path="/explore" element={<Explore />} />
    </Routes>
    <audio id="audio"
            onTimeUpdate={timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler}
            ref = {audioRef} 
            src={currentSong.audio}
            onEnded={songEndHandler}
            volume={currentSong.volume}
            >
            </audio>
  </>
     
  );
}
export default App;
