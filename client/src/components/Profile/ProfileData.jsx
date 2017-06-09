import React from 'react';
import { connect } from 'react-redux';
import ProfileCommonInfo from './ProfileCommonInfo.jsx';
import ProfileReferalSystem from './ProfileReferalSystem.jsx';
import ProfileRouletteStats from './ProfileRouletteStats.jsx';
import ProfilePokerStats from './ProfilePokerStats.jsx';
import ProfileTradeHistory from './ProfileTradeHistory.jsx';
import ProfileTransferHistory from './ProfileTransferHistory.jsx';
import ProfileHonestyCheck from './ProfileHonestyCheck.jsx';
import ProfileSettings from './ProfileSettings.jsx';

const ProfileData = ({ section }) => {
  switch (section) {
    case "/profile/common-info":
      return <ProfileCommonInfo />
    case "/profile/referal-system":
      return <ProfileReferalSystem />
    case "/profile/roulette-stats":
      return <ProfileRouletteStats />
    case "/profile/poker-stats":
      return <ProfilePokerStats />
    case "/profile/trade-history":
      return <ProfileTradeHistory />
    case "/profile/transfer-history":
      return <ProfileTransferHistory />
    case "/profile/honesty-check":
      return <ProfileHonestyCheck />
    case "/profile/settings":
      return <ProfileSettings />
    default:
      return <div>Content for common-info</div>
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(ProfileData);
