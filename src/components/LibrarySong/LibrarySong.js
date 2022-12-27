/*eslint-disable */
import React from 'react';

import './LibrarySong.css';

const LibrarySong = ({
    song, 
    songs, 
    setCurrentSong, 
    id, 
    audioRef,
    isPlaying,
    setSongs,
    currentSong}) => {
    const songSelectHandler = async () => {
      // setCurrentSong(song.id);
      const selectedSong = songs.filter((state) => state.id === song.id)
      await setCurrentSong(selectedSong[0]);
    //Set ACTIVE STATE
    const newSongs = songs.map((song) => {
      if(song.id === currentSong.id){
        return{
          ...song,
          active: true,
        }
      }else{
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs (newSongs);
    //AutoPlayState 
    if (isPlaying) audioRef.current.play();
    };
    return (
      <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img alt = {song.name} src={song.cover} className="image"/>

      <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
      </div>
      </div>
    );
}

export default LibrarySong;