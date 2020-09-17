import React from 'react';
import PlayerBody from '../PlayerBody';
import PlayerSidebar from '../PlayerSidebar';
import './index.css';

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
