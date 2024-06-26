import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Shuffle from '@mui/icons-material/Shuffle';
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import PauseCircleOutlineIcon  from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import { useDataLayerValue } from './DataLayer';

function Footer() {
  const[{current_track,current_track_artist,current_track_image},dispatch] = useDataLayerValue();
  console.log(current_track);
  // console.log(current_track.item.artists.name);
  return (
    <div className='footer'>
        <div className='footer_left'>
            {current_track_image ? <img src={current_track_image} alt='' className='footer_albumLogo'/> : null}
            <div className='footer_songinfo'>
                <h4>{current_track.name}</h4>
                <p>{current_track_artist}</p>
            </div>
        </div>

        <div className='footer_center'>
            <ShuffleIcon className='footer_green' />
            <SkipPreviousIcon className='footer_icon' />
            <PlayCircleOutlineIcon fontSize="large" className='footer_icon'/>
            <SkipNextIcon className='footer_icon' />
            <RepeatIcon className='footer_green' />
        </div>

        <div className='footer_right'>
            <Grid container spacing={2}>
              <Grid item>
                <PlaylistPlayIcon />
              </Grid>
              <Grid item>
                <VolumeDownIcon />
              </Grid>
              <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
              </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer