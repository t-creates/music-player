/* eslint-disable */
import React from 'react';

import "./PlayerLayout.css";
import Sidebar from '../Sidebar/Sidebar';
import Navbar  from '../Navbar/Navbar';
import Content  from '../Content/Content';
import Player  from '../Player/Player';

function PlayerLayout({ audioRef, currentSong, isPlaying, setIsPlaying , songInfo, setSongInfo,songs,setCurrentSong, setSongs,libraryStatus}) {
  
  return (
    
    <div className="playerLayout">
      <Navbar/>
      <Sidebar/>
      <Content  audioRef={audioRef}
          songs ={songs} 
          setCurrentSong ={setCurrentSong}
          isPlaying = {isPlaying}
          setSongs ={setSongs}
          libraryStatus = {libraryStatus}
          currentSong ={currentSong}/>
      <Player audioRef={audioRef}
          setIsPlaying ={setIsPlaying}
          isPlaying= {isPlaying}
          currentSong ={currentSong}
          setSongInfo = {setSongInfo}
          songInfo = {songInfo}
          songs = {songs}
          setCurrentSong = {setCurrentSong}
          setSongs = {setSongs}/>
          
    </div>
  );
}

export default PlayerLayout;
