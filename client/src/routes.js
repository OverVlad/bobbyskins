import store from './store';

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DepositPage from './components/DepositPage.jsx';
import WithdrawPage from './components/WithdrawPage.jsx';
import PokerPage from './components/PokerPage.jsx'
import ProfilePage from './components/ProfilePage.jsx'

import { userAuthCheckRequest, authenticateUser } from './actions/authActions';
import { updateUser } from './actions/userActions';

import socket from './utils/socket';

const routes = {
  component: Base,
  onEnter(nextState, replace, callback) {
    const { getState, dispatch } = store;
    const { auth, user } = getState();
    const { pathname } = nextState.location;

    if (!auth.isAuthenticated && !auth.error || auth.isAuthenticated && !user.id) {
      dispatch(userAuthCheckRequest())
        .then((user) => {
          dispatch(authenticateUser());
          dispatch(updateUser(user.data));

          socket.connect(user.data);

          replace(pathname);
          callback();
        })
        .catch((error) => {
          console.log(error);
          dispatch(authenticateUser(error.message));
          replace('/');
          callback();
        });
    } else {
      callback();
    }
  },
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/deposit',
      component: DepositPage
    },
    {
      path: '/withdraw',
      component: WithdrawPage
    },
    {
      path: '/poker',
      component: PokerPage
    },
    {
      path: '/profile/common-info',
      component: ProfilePage
    },
    {
      path: '/profile/referal-system',
      component: ProfilePage
    },
    {
      path: '/profile/bet-history',
      component: ProfilePage
    },
    {
      path: '/profile/trade-history',
      component: ProfilePage
    },
    {
      path: '/profile/transfer-history',
      component: ProfilePage
    },
    {
      path: '/profile/honesty-check',
      component: ProfilePage
    },
    {
      path: '/profile/settings',
      component: ProfilePage
    },
  ]
};

export default routes;
