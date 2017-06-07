import React from 'react';
import SidebarListItem from './SidebarListItem.jsx';
import CommonInfoImg from '../../../public/img/profile-icons/sidebar-common-info.svg';
import ReferalSystemImg from '../../../public/img/profile-icons/sidebar-referal-system.svg';
import BetHistoryImg from '../../../public/img/profile-icons/sidebar-bet-history.svg';
import TradeHistoryImg from '../../../public/img/profile-icons/sidebar-trade-history.svg';
import TransferHistoryImg from '../../../public/img/profile-icons/sidebar-transfer-history.svg';
import HonestyCheckImg from '../../../public/img/profile-icons/sidebar-honesty-check.svg';
import SettingsImg from '../../../public/img/profile-icons/sidebar-settings.svg';

const SidebarList = () => {
  const sublist = [
    {path: "/profile/roulette-stats", title: "Рулетка", icon_path: BetHistoryImg},
    {path: "/profile/poker-stats", title: "Покер", icon_path: BetHistoryImg},
  ];

  return (
    <div className="sidebar wrapper">
      <ul className="sidebar-list">
        <SidebarListItem
          path="/profile/common-info"
          title="Общая Информация"
          icon_path={CommonInfoImg}
          expandable={false}
        />
        <SidebarListItem
          path="/profile/referal-system"
          title="Реферальная система"
          icon_path={ReferalSystemImg}
          expandable={false}
        />
        <SidebarListItem
          path="/profile/bet-history"
          title="История ставок"
          icon_path={BetHistoryImg}
          expandable={true}
          sublist={sublist}
        />
        <SidebarListItem
          path="/profile/trade-history"
          title="История обменов"
          icon_path={TradeHistoryImg}
          expandable={false}
        />
        <SidebarListItem
          path="/profile/transfer-history"
          title="История переводов"
          icon_path={TransferHistoryImg}
          expandable={false}
        />
        <SidebarListItem
          path="/profile/honesty-check"
          title="Проверка честности"
          icon_path={HonestyCheckImg}
          expandable={false}
        />
        <SidebarListItem
          path="/profile/settings"
          title="Настройки"
          icon_path={SettingsImg}
          expandable={false}
        />
      </ul>
    </div>
  );
}

export default SidebarList;
