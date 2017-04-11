import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DepositPage from './components/DepositPage.jsx';
import WithdrawPage from './components/WithdrawPage.jsx';


const routes = {
  component: Base,
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
