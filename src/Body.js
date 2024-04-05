import React, {useEffect} from 'react'
import "./Body.css"  
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import likeimage from './liked-songs-300.png';
import Track from './Track';
import DefBody from './DefBody';
import Search from './Search';
import axios from 'axios';


function Body() {
  const[{user,token,liked_songs,playlists,search_flag},dispatch] = useDataLayerValue();
  console.log(liked_songs)
  console.log(playlists);
  return (
    <div className='body'>
      {
        search_flag ? (
          <Search />
        ) : (
          <DefBody />
        )
      }
    </div>
  );
}

export default Body