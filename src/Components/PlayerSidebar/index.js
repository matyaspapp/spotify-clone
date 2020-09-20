import React from 'react';
import './index.css';
import PlayerSidebarOption from '../PlayerSidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProviderValue } from '../../StateProvider';

const PlayerSidebar = () => {
  const [{ playlists }, dispatch] = useStateProviderValue();

  return (
    <div className="playerSidebar">
      <img
        className="playerSidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <PlayerSidebarOption title="Home" Icon={HomeIcon}/>
      <PlayerSidebarOption title="Searc" Icon={SearchIcon}/>
      <PlayerSidebarOption title="Your Library" Icon={LibraryMusicIcon}/>

      <br />
      <strong className="playerSidebar__title">PLAYLISTS</strong>
      <hr />

      {
        playlists?.items?.map(playlist => (
          <PlayerSidebarOption title={playlist.name} />
        ))
      }
    </div>
  );
}

export default PlayerSidebar;
