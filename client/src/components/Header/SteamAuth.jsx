import React from 'react';
import SteamImg from '../../../public/img/steam.png';

const SteamAuth = () => (
  <div className="auth">
    <a href="/auth/steam">
      <img src={SteamImg} alt="Steam Auth" className="auth-img" />
    </a>
  </div>
);

export default SteamAuth;
