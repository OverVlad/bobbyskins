import React from 'react';

const Profile = ({ user }) => (
  <div className="profile">
    <img src={user.avatar} alt="Profile" className="profile-avatar" />
    <a href="#" className="profile__name">{user.username}</a>
  </div>
);

export default Profile;
