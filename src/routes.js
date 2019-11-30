/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard';
import UserProfile from 'views/UserProfile';
import TableList from 'views/TableList';
import Typography from 'views/Typography';
import Icons from 'views/Icons';
import Maps from 'views/Maps';
import Notifications from 'views/Notifications';
import Upgrade from 'views/Upgrade';

// user components
import UserLoginView from 'views/user/UserLogin';
import UserRegisterView from 'views/user/UserRegister';
import HomePage from 'views/user/Home';
import Freelancers from 'views/Freelancers';
import Employers from 'views/Employers';
import EmployerRequests from 'views/EmployerRequests';

const dashboardRoutes = [
  // admin
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: 'pe-7s-user',
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/freelancers',
    name: 'View Job Seekers',
    icon: 'pe-7s-rocket',
    component: Freelancers,
    layout: '/admin',
  },
  {
    path: '/employers',
    name: 'View Employers',
    icon: 'pe-7s-rocket',
    component: Employers,
    layout: '/admin',
  },
  {
    path: '/requests',
    name: 'Employer Requests',
    icon: 'pe-7s-rocket',
    component: EmployerRequests,
    layout: '/admin',
  },

  // route user
  {
    upgrade: true,
    path: '/login',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: UserLoginView,
    layout: '',
  },
  {
    upgrade: true,
    path: '/register',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: UserRegisterView,
    layout: '',
  },
];

export default dashboardRoutes;
