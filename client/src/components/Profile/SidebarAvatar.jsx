import React from 'react';

const SidebarAvatar = ({user}) => (
  <div className="sidebar-avatar">
    <img className="sidebar-avatar__pic" src={user.avatar} alt="User Avatar" />
    <p className="sidebar-avatar__username">{user.username}</p>
    <p className="sidebar-avatar__money">1 234 567</p>
    <i className="fa fa-diamond" aria-hidden="true"></i>
  </div>
);

export default SidebarAvatar;
