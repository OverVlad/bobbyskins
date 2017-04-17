import store from './store';

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DepositPage from './components/DepositPage.jsx';
import WithdrawPage from './components/WithdrawPage.jsx';

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
    }
  ]
};

export default routes;
