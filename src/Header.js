import React, { useEffect, useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from './DataLayer'
import _default from '@mui/material/styles/identifier'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-js'

function Header() {
    const[{user,token}, dispatch] = useDataLayerValue();
    const TopTracks = () => {
        const [topTracks, setTopTracks] = useState([]);
        const accessToken = token
        const artistId = "4fEkbug6kZzzJ8eYX6Kbbp"
        useEffect(()=> {
            const getTopTracks = async () => {
                try {
                  const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`, {
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  });
                  const tracks = response.data.tracks;
                  setTopTracks(tracks)
                } catch (error) {
                  console.error('Error fetching top tracks:', error);
                  return null;
                }
            };
            getTopTracks();
        },[accessToken,artistId])
        return topTracks;
    }
    

    // console.log(TopTracks());
    

    // const getTopTracks = async (accessToken, artistId) => {
    //     try {
    //       const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`, {
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       });
      
    //       const topTracks = response.data.tracks;
    //       return topTracks;
    //     } catch (error) {
    //       console.error('Error fetching top tracks:', error);
    //       return null;
    //     }
    //   };

    // console.log(TopTracks())

    return (
    <div className='header'>
        <div className='header_left'>
            <SearchIcon />
            <input
                placeholder='Search for Artists, Songs, or Albums'
                type='text'
            />
        </div>

        <div className='header_right'>
            <Avatar src='' alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header