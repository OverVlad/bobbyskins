import React from 'react';
import SidebarListItem from './SidebarListItem.jsx';

const SidebarList = () => (
  <div className="sidebar wrapper">
    <ul className="sidebar-list">
      <SidebarListItem path="/profile/common-info" title="Общая Информация" icon_path="img/profile-icons/sidebar-common-info.svg" />
      <SidebarListItem path="/profile/referal-system" title="Реферальная система" icon_path="img/profile-icons/sidebar-referal-system.svg" />
      <SidebarListItem path="/profile/bet-history" title="История ставок" icon_path="img/profile-icons/sidebar-bet-history.svg" games={[]}/>
      <SidebarListItem path="/profile/trade-history" title="История обменов" icon_path="img/profile-icons/sidebar-trade-history.svg" />
      <SidebarListItem path="/profile/transfer-history" title="История переводов" icon_path="img/profile-icons/sidebar-transfer-history.svg" />
      <SidebarListItem path="/profile/honesty-check" title="Проверка честности" icon_path="img/profile-icons/sidebar-honesty-check.svg" />
      <SidebarListItem path="/profile/settings" title="Настройки" icon_path="img/profile-icons/sidebar-settings.svg" />
    </ul>
  </div>
);

export default SidebarList;
