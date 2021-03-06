import SpotifyWebApi from 'spotify-web-api-js';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '3353e643f35b495a925019c575c75a9a';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const loginUrl =
  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial
    }, {})

export const spotify = new SpotifyWebApi();
