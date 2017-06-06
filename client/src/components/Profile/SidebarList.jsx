import React from 'react';
import SidebarListItem from './SidebarListItem.jsx';

const SidebarList = () => {
  const sublist = [
    {path: "/profile/roulette-stats", title: "Рулетка", icon_path: "/public/img/profile-icons/sidebar-bet-history.svg"},
    {path: "/profile/poker-stats", title: "Покер", icon_path: "/public/img/profile-icons/sidebar-bet-history.svg"},
  ];

  return (
    <div className="sidebar wrapper">
      <ul className="sidebar-list">
        <SidebarListItem
          path="/profile/common-info"
          title="Общая Информация"
          icon_path="../../../public/img/profile-icons/sidebar-common-info.svg"
          expandable={false}
        />
        <SidebarListItem
          path="/profile/referal-system"
          title="Реферальная система"
          icon_path="/public/img/profile-icons/sidebar-referal-system.svg"
          expandable={false}
        />
        <SidebarListItem
          path="/profile/bet-history"
          title="История ставок"
          icon_path="img/profile-icons/sidebar-bet-history.svg"
          expandable={true}
          sublist={sublist}
        />
        <SidebarListItem
          path="/profile/trade-history"
          title="История обменов"
          icon_path="img/profile-icons/sidebar-trade-history.svg"
          expandable={false}
        />
        <SidebarListItem
          path="/profile/transfer-history"
          title="История переводов"
          icon_path="img/profile-icons/sidebar-transfer-history.svg"
          expandable={false}
        />
        <SidebarListItem
          path="/profile/honesty-check"
          title="Проверка честности"
          icon_path="img/profile-icons/sidebar-honesty-check.svg"
          expandable={false}
        />
        <SidebarListItem
          path="/profile/settings"
          title="Настройки"
          icon_path="img/profile-icons/sidebar-settings.svg"
          expandable={false}
        />
      </ul>
    </div>
  );
}

export default SidebarList;
