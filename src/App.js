import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
// console.log(decodeURIComponent(window.location.hash.substring(1).split('&')[0].split('=')[1].substring()));

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token, playlists,liked_songs,current_track_image}, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      spotify.getUserPlaylists().then((playlists) => { 
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })
      spotify.getMyCurrentPlayingTrack().then((current_track) => {
        dispatch({
          type: 'SET_CURRTRACK',
          current_track: current_track.item,
        })
        dispatch({
          type: 'SET_CURRENT_TRACK_ARTIST',
          current_track_artist: (current_track.item ? current_track.item.artists[0].name : null),
        })
        dispatch({
          type: 'SET_CURRENT_TRACK_IMAGE',
          current_track_image: (current_track.item ? current_track.item.album.images[0].url : null), 
        })
      })
      const options = {
        limit:100,
      };
      spotify.getMySavedTracks().then((liked_songs) => {
        dispatch({
          type: 'SET_SAVEDTRACKS',
          liked_songs: liked_songs,
        })
      })
    }
  }, []);
  
  // console.log(current_track_image);
  // console.log(user);
  // console.log(token);
  // console.log(playlists.items[0].name);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
