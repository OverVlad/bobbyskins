import React from 'react';
import ReactSVG from 'react-svg'
import { Link } from 'react-router';

const SidebarListItem = ({path, title, icon_path, expandable=false, sublist=[]}) => {
  if (expandable) {
    const sublistItems = sublist.map((item) =>
      <li key={item.path}>
        <Link className="sidebar-list-item__link" activeClassName="sidebar-list-item__link-active" to={item.path}>
          <ReactSVG path={item.icon_path} className="sidebar-list-item__icon" />
          <p className="sidebar-list-item__sublist__item-title">{item.title}</p>
        </Link>
      </li>
    );

    return (
      <li className="sidebar-list-item">
        <ReactSVG path={icon_path} className="sidebar-list-item__icon" />
        <p className="sidebar-list-item__title">{title}</p>
        <ul className="sidebar-list-item__sublist">
          {sublistItems}
        </ul>
      </li>
    )
  }

  return (
    <li className="sidebar-list-item">
      <Link className="sidebar-list-item__link" activeClassName="sidebar-list-item__link-active" to={path}>
        <ReactSVG path={icon_path} className="sidebar-list-item__icon" />
        <p className="sidebar-list-item__title">{title}</p>
      </Link>
    </li>
  )
}

export default SidebarListItem;
