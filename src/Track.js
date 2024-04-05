import React from 'react'
import './Track.css';
import { useDataLayerValue } from './DataLayer';

// serial_no,track_image,track_name,track_artist,album_name,track_date_added,track_length

function Track({serial_no,track_image,track_name,track_artist,album_name,track_date_added,track_length}) {
    const[{playlist_songs},dispatch] = useDataLayerValue();
    const convert_to_min = (sz) => {
        let num = Math.floor(sz/1000);
        // num = num/1000;
        const minutes = Math.floor(num/60);
        let seconds = Math.floor(num%60);
        if(seconds < 10)
        {
            return `${minutes}:0${seconds}`;
        }
        const s = `${minutes}:${seconds}`;
        return s; 
    }

    const convert_to_date = (inputDate) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(inputDate);
        const formattedDate = date.toLocaleDateString('en-US', options);
      
        return formattedDate;
    }

  return (
    <div className='playlist_track'>
        <div className='track_number'>
            {serial_no}
        </div>
        <div className='track_title'>
            <div className='track_img'>
                <img src={track_image} className='track_photo'/>
            </div>
            <div className='track_name'>
                {track_name}
            </div>
        </div>
        <div className='track_album_name'>
            {album_name}
        </div>
        <div className='track_date_added'>
            {convert_to_date(track_date_added)}
        </div>
        <div className='track_length'>
            {convert_to_min(track_length)}
        </div>
    </div>
  )
}

export default Track