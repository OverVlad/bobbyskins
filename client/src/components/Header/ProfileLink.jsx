import React from 'react';
import { Link } from 'react-router';

const ProfileLink = ({user}) => (
  <div className="profile-link">
    <Link to="/profile">
      <img src={user.avatar} alt="User Avatar" className="profile-link__avatar" />
      <p className="profile-link__name">{user.username}</p>
    </Link>
  </div>
);

export default ProfileLink;
