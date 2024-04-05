import React from 'react'
import { useDataLayerValue } from './DataLayer'
import "./Player.css";
import Sidebar from "./Sidebar.js"
import Body from './Body.js';
import Footer from './Footer.js';
import Songs from './Songs.js'

function Player({ spotify }) {
    const [{current_track,playlist_songs,category_id,liked_songs},dispatch] = useDataLayerValue()
    return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar />
            {!playlist_songs && !category_id && <Body/>}
            {(playlist_songs || category_id) && <Songs />}
        </div>
        {current_track && <Footer />};
    </div>
  )
}

export default Player