import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import Library from "@mui/icons-material/LibraryMusic"
import { useDataLayerValue } from './DataLayer'
import Playlist from './Playlist'
import axios from 'axios'

function Sidebar() {
    const [{token , playlists,playlist_songs,search_flag,category_id}, dispatch] = useDataLayerValue();
    // console.log(playlists);
    const [currentPlaylistId, setCurrentPlaylistId] = useState([]);

    const PlaylistTracks = (id) => {
      const[playlistSong,setPlaylistSongs] = useState([]);
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
            setPlaylistSongs(t);
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

    // const SavedTracks = () => {
    //   const [savedTracks,setSavedTracks] = useState([])
    //   const access_token = token;
    //   useEffect(() => {
    //     const getSavedTracks = async () => {
    //       try{
    //         const response = await axios.get(`https://api.spotify.com/v1/me/tracks`,{
    //           headers: {
    //             Authorization: `Bearer ${access_token}`,
    //           },
    //         });
    //         const st =  response.data.items;
    //         setSavedTracks(st);
    //         // console.log(st);
    //       } catch(error) {
    //         console.error('Error finding saved tracks: ',error);
    //         return null;
    //       }
    //     };
    //     getSavedTracks();
    //   },[access_token])
    //   console.log(savedTracks);
    //   console.log(savedTracks)
    //   return savedTracks
    // }
    
    // SavedTracks();

    const HandleClick = (id) => {
        console.log(id);
        dispatch({
          type:'SET_PLAYLISTSONGS',
          playlist_songs: id,
        })
        dispatch({
          type:'SET_SEARCH_FLAG',
          search_flag: false
        })
        dispatch({
          type:'SET_CATEGORY_ID',
          category_id: null,
        })
      }
    
    // if(playlist_songs != null)
    // {
    //   PlaylistTracks();
    // }

    const ClickHandle = (id) => {
      if(id === 0)
      {
        console.log("clicked home")
        dispatch({
          type:'SET_PLAYLISTSONGS',
          playlist_songs: null,
        })
        dispatch({
          type:'SET_SEARCH_FLAG',
          search_flag: false 
        })
        dispatch({
          type:'SET_CATEGORY_ID',
          category_id: null,
        })
        console.log(category_id)
        console.log(playlist_songs)
      }
      else if(id === 1)
      {
        console.log("clicked search icon")
        dispatch({
          type:'SET_SEARCH_FLAG',
          search_flag: true,
        })
        dispatch({
          type: 'SET_PLAYLISTSONGS',
          playlist_songs: null,
        })
        dispatch({
          type:'SET_CATEGORY_ID',
          category_id: null,
        })
      }
      console.log(search_flag)
      console.log(category_id)
      console.log(playlist_songs)
    }

    // const ClickHandle = () => {
    // }
      
  return (
    <div className='sidebar'>
        <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt = ""/>
        <SidebarOption title = "Home" Icon={HomeIcon} onClickHandle={() => ClickHandle(0)} />
        <SidebarOption title = "Search" Icon = {SearchIcon} onClickHandle={() => ClickHandle(1)} />
        <SidebarOption title = "Your Library" Icon={Library}/>
        <br />
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr />
        
        {playlists?.items?.map((playlist,index) =>(
            <Playlist key={index} title={playlist.name} image={playlist.images[0].url} subtitle={playlist.owner.display_name} onClickHandler={HandleClick} id={playlist.id}/>
        ))}

    </div>
  )
}

export default Sidebar