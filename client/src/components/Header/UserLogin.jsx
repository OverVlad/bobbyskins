import React from 'react';
import SteamAuth from './SteamAuth.jsx';
import ProfileLink from './ProfileLink.jsx';

const UserLogin = ({user, isAuthenticated}) => {
  if (isAuthenticated) {
    return <ProfileLink user={user} />
  }

  return <SteamAuth />
}

export default UserLogin;
