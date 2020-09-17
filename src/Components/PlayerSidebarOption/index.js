import React from 'react';
import './index.css';

const PlayerSidebarOption = ({ title, Icon }) => {
  return (
    <div className="playerSidebarOption">
      {Icon && <Icon className="playerSidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default PlayerSidebarOption;
