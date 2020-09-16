/** 
 * use BEM naming convention
 * https://en.bem.info/methodology/naming-convention/
*/
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl, spotify } from './spotify';


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>You are logged in!</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
