import React from 'react';

const SidebarListItem = ({title, icon, onClick, expandable, games=[]}) => (
  <li>
    <p>{title}</p>
  </li>
);

export default SidebarListItem;
