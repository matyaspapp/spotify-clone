import React from 'react';
import './index.css';
import PlayerBody from '../PlayerBody';
import PlayerSidebar from '../PlayerSidebar';
import PlayerFooter from '../PlayerFooter';

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <PlayerSidebar />
        <PlayerBody />
      </div>
      <PlayerFooter />
    </div>
  );
};

export default Player;
