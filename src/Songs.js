import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import likeimage from './liked-songs-300.png';
import Track from './Track';
import axios from 'axios';
import './Songs.css';
import Display from './Display';
import Search from './Search';

function Songs({playlist_id}) {
  const[{user,liked_songs,playlists,search_flag},dispatch] = useDataLayerValue();
//   console.log(liked_songs)
//   console.log(playlists);
  return (
    <div className='body'>
      {
        search_flag ? (
          <Search />
        ) : (
          <Display />
        )
      }
        {/* <Header spotify={spotify} />
      <div className='playlist_name'>
        <div className='playlist_photo'>
          <img src={playlistUrl} className='liked_song_image'/>
        </div>
        <div className='playlist_information'>
          <div className='play_title'>
            {playlistName}
          </div>
          <div className='playlist_details'>
            <div className='playlist_owner'>
              {playlistOwner} 
            </div>
            <div className='playlist_size'>
              {playlist_gaane.total} songs
            </div>
          </div>
        </div>
      </div>
      <div className='playbutton_option'>
        play button
      </div>
      <div className='songs_information'>
        <div className='serial_no'>
          #
        </div>
        <div className='title'>
          Title
        </div>
        <div className='album'>
          Album
        </div>
        <div className='date_added'>
          Date Added
        </div>
        <div className='time'>
          Time
        </div>
      </div>
      <hr className='linebreak'/>
      {playlist_gaane?.items?.map((gaane,index) =>(
            <Track key={index} serial_no={index+1} track_image={gaane.track.album.images[0].url} 
            track_name = {gaane.track.name} album_name = {gaane.track.album.name}
            track_date_added = {gaane.added_at} track_length = {gaane.track.duration_ms}/>
        ))} */}
    </div>
  )
}

export default Songs