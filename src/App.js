import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login';
import {getTokenFromUrl} from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import {useDataLayerValue} from './components/DataLayer';

{
  /* SpotifyWebApi is basically object which is responsible b/w react and spotify app*/
}
const spotify = new SpotifyWebApi();

function App() {
  {
    /* Run code based on given confition. It will always run a function. */
  }
  // const [token, setToken] = useState(null);

  // To get any info from DataLayer need to use below code.
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    // console.log('I have hash', hash);
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      //porviding access token to SpotifyWebApi
      spotify.setAccessToken(_token);
      // this will provide users details.
      spotify.getMe().then((user) => {
        // console.log('persons ', user);

        //this will pop the user to DataLayer. Then We will pull it from DataLayer and read.
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      // Pulling Playlists from spotifyWebAPI
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcM5oG0NF6T4H').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );
    }
    // console.log('I have token', token);
  }, []);

  // console.log('persons ', user);
  // console.log('Token ', user);

  return (
    <div className="App">
      {/* Spotify logo */}
      {/* Login with Spotify button */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
