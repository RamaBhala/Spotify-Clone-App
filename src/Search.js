import React, {useState,useEffect} from 'react'
import './Search.css'
import axios from 'axios';
import { useDataLayerValue } from './DataLayer';
import Category from './Category';
import Header from './Header';

function Search() {
    const [{token , playlists,playlist_songs,search_flag,category_id}, dispatch] = useDataLayerValue();
    
    const[category,setCategory] = useState([]);
    const PlaylistTracks = () => {
      const access_token = token;
      useEffect(() => {
        const getTracks = async () => {
          try {
            const response = await axios.get(`https://api.spotify.com/v1/browse/categories?limit=30`,{
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            });
            const t = response.data.categories.items;
            // console.log(t);
            setCategory(t);
          } catch(error) {
            console.error('Error fetching top tracks:', error);
            return null;
          }
        };
        getTracks();
      },[access_token])
      console.log(category);
    }
    PlaylistTracks();

    const ClickHandle = (id) => {
        // console.log("hello")
        dispatch({
            type:'SET_CATEGORY_ID',
            category_id : id,
        })
        dispatch({
            type:'SET_SEARCH_FLAG',
            search_flag: false
        })
    }

  return (
    <div className='search'>
        <Header />
        {/* <div className='search_bar'>Search</div> */}
        <div className='content'>
            <div className='box'>
                {category?.map((a) => (
                    <div className='grid-item'>
                        <img src = {a.icons[0].url} className='grid-image' onClick={() => ClickHandle(a.id)}/>
                        <div className='grid-name'>{a.name}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Search