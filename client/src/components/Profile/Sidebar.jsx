import React from 'react';
import SidebarAvatar from './SidebarAvatar.jsx';
import SidebarList from './SidebarList.jsx';

const Sidebar = ({user}) => (
  <div className="sidebar wrapper">
    <SidebarAvatar user={user} />
    <SidebarList />
  </div>
);

export default Sidebar;
