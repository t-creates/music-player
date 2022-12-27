/*eslint-disable */
import React from 'react'
import './Content.css';

import LibrarySong from '../LibrarySong/LibrarySong';

const Content = ({ songs, setCurrentSong, currentSong, audioRef, isPlaying, setSongs,libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library': " "} `}>
        <h2> Library </h2>
      <div className = "library-songs">
        {songs.map((song) => (
        <LibrarySong 
          songs = {songs}
          setCurrentSong= {setCurrentSong} 
          song = {song}
          id ={song.id}
          key = {song.id}
          audioRef = {audioRef}
          isPlaying = {isPlaying}
          setSongs= {setSongs}
          currentSong ={currentSong}
          />
        ))}
      </div>    
    </div>
  )
}

export default Content
