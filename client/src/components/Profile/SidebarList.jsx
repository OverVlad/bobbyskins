import React from 'react';
import SidebarListItem from './SidebarListItem.jsx';

const SidebarList = () => (
  <div className="sidebar wrapper">
    <ul className="sidebar-list">
      <SidebarListItem title="Общая Информация" icon="img/sidebar-common-info.png" onClick="" expandable={false}/>
      <SidebarListItem title="Реферальная система" icon="img/sidebar-referal-system.png" onClick="" expandable={false}/>
      <SidebarListItem title="История ставок" icon="img/sidebar-bet-history.png" onClick="" expandable={true} games={[]}/>
      <SidebarListItem title="История обменов" icon="img/sidebar-trade-history.png" onClick="" expandable={false}/>
      <SidebarListItem title="История переводов" icon="img/sidebar-transfer-history.png" onClick="" expandable={false}/>
      <SidebarListItem title="Проверка честности" icon="img/sidebar-honesty-check.png" onClick="" expandable={false}/>
      <SidebarListItem title="Настройки" icon="img/sidebar-settings.png" onClick="" expandable={false}/>
    </ul>
  </div>
);

export default SidebarList;
