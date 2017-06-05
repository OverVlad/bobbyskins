import React from 'react';

const SidebarAvatar = ({user}) => (
  <div>
    <img src={user.avatar} alt="User Avatar" />
    <p>{user.name}</p>
  </div>
);

export default SidebarAvatar;
