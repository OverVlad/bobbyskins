import React from 'react';
import ReactSVG from 'react-svg'
import { Link } from 'react-router';

const SidebarListItem = ({path, title, icon_path, color_theme="", games=[]}) => (
  <li className="sidebar-list-item">
    <Link to={path}>
      <ReactSVG path={icon_path} className={"sidebar-list-item__icon " + color_theme} />
      <p className="sidebar-list-item__title">{title}</p>
    </Link>
  </li>
);

export default SidebarListItem;
