import React from 'react';
import './index.css';
import PlayerBody from '../PlayerBody';
import PlayerSidebar from '../PlayerSidebar';

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <PlayerSidebar />
        <PlayerBody />
      </div>
    </div>
  );
};

export default Player;
