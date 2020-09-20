/** 
 * use BEM naming convention
 * https://en.bem.info/methodology/naming-convention/
*/
import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl, spotify } from './spotify';
import { useStateProviderValue } from './StateProvider';


function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: 'SET_USER',
            user: user,
          });
        });
      // playlists
      spotify
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,
          })
        });
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
