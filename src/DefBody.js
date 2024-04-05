import React, {useEffect}from 'react'
import './DefBody.css'
import Track from './Track'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import likeimage from './liked-songs-300.png';
import axios from 'axios'
// import Track from './Track';

function DefBody() {
    const[{user,token,liked_songs,playlists,search_flag},dispatch] = useDataLayerValue();
    const Hello = () => {
      const access_token = token;
      // const playlistId = id;
      var ret_id = null;
      useEffect(() => {
        const getTracks = async () => {
          try {
            const response = await axios.get(`https://api.spotify.com/v1/browse/featured-playlists`,{
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            });
            console.log(response.data)
            // ret_id = response.data.playlists.items[0].id;
            // setCatId(ret_id);
          } catch(error) {
            console.error('Error fetching top tracks:', error);
            return null;
          }
        };
        getTracks();
      },[access_token])
      // console.log(ret_id);
      // return catId;
  }
  Hello();
    return (
    <div className='defbody'>
        {/* <Header spotify={spotify} /> */}
      <div className='playlist_name'>
        <div className='playlist_photo'>
          <img src={likeimage} className='liked_song_image'/>
        </div>
        <div className='playlist_information'>
          <div className='play_title'>
            Liked Songs
          </div>
          <div className='playlist_details'>
            <div className='playlist_owner'>
              {user.display_name} 
            </div>
            <div className='playlist_size'>
              {liked_songs.total} songs
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
      {liked_songs?.items?.map((liked_song,index) =>(
            <Track key={index} serial_no={index+1} track_image={liked_song.track.album.images[0].url} 
            track_name = {liked_song.track.name} album_name = {liked_song.track.album.name}
            track_date_added = {liked_song.added_at} track_length = {liked_song.track.duration_ms}/>
        ))}
    </div>
  )
}

export default DefBody