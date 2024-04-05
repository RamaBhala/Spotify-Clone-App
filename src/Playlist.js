import React from 'react'
import './Playlist.css'

function Playlist({title,image,subtitle,onClickHandler,id}) {
  return (
    <div className='playlist' onClick={()=>{onClickHandler(id)}}>
        <div className='playlist_image'>
            <img src={image} />
        </div>
        <div className='playlist_info'>
            <div className='playlist_title'>
                {title}
            </div>
            <div className='playlist_subtitle'>
                {subtitle}
            </div>
        </div>

    </div>
  )
}

export default Playlist