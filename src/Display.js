import React, { useEffect, useState } from 'react'
import './Display.css'
import Track from './Track'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import likeimage from './liked-songs-300.png';
import axios from 'axios';
import Category from './Category'


function Display() {
    const[{user,token,playlist_songs,search_flag,spotify,category_id},dispatch] = useDataLayerValue();
    const[playlistSong,setPlaylistSongs] = useState([]);
    const[playlistUrl,setPlaylistUrl] = useState();
    const[playlistName,setPlaylistName] = useState();
    const[playlistOwner,setPlaylistOwner] = useState();
    const[catId,setCatId] = useState();
    const PlaylistTracks = (id) => {
        const access_token = token;
        const playlistId = id;
        useEffect(() => {
          const getTracks = async () => {
            try {
              const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`,{
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
              });
              const t = response.data.tracks;
              const x = response.data.images[0].url;
              const y = response.data.name;
              const z = response.data.owner.display_name;
              setPlaylistName(y);
              setPlaylistUrl(x)
              setPlaylistSongs(t);
              setPlaylistOwner(z);
            } catch(error) {
              console.error('Error fetching top tracks:', error);
              return null;
            }
          };
          getTracks();
        },[access_token,playlistId])
        console.log(playlistSong);
        return playlistSong;
    }

    const CategoryTracks = (id) => {
        const access_token = token;
        const playlistId = id;
        var ret_id = null;
        useEffect(() => {
          const getTracks = async () => {
            try {
              const response = await axios.get(`https://api.spotify.com/v1/browse/categories/${playlistId}/playlists`,{
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
              });
              console.log(response.data)
              ret_id = response.data.playlists.items[0].id;
              setCatId(ret_id);
            } catch(error) {
              console.error('Error fetching top tracks:', error);
              return null;
            }
          };
          getTracks();
        },[access_token,playlistId])
        console.log(ret_id);
        return catId;
    }

    var playlist_gaane = null;
    if(category_id === null)    
        playlist_gaane = PlaylistTracks(playlist_songs);
    else
    {
        var i = CategoryTracks(category_id);
        console.log(i);
        console.log("ohhhhhh");
        playlist_gaane = PlaylistTracks(i);        
    }
    console.log(playlist_gaane)
    return (
    <div className='display'>
        {/* <Header spotify={spotify} /> */}
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
              {playlist_gaane?.total} songs
            </div>
          </div>
        </div>
      </div>
      <div className='playbutton_option'>
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
        ))}
    </div>
  )
}

export default Display