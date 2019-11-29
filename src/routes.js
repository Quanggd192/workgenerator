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
import TableList from 'views/TableList';
import Typography from 'views/Typography';
import Icons from 'views/Icons';
import Maps from 'views/Maps';
import Notifications from 'views/Notifications';
import Upgrade from 'views/Upgrade';

// user components
import UserLoginView from "views/user/UserLogin"
import UserRegisterView from "views/user/UserRegister"
import UserProfile from 'views/UserProfile';
import HomePage from "views/user/Home"
import AboutUs from "views/user/AboutUs"
import ContactUs from "views/user/ContactUs"
import UserProfileClinent from "views/user/UserProfile"
import ListJob from "views/user/ListJob"
import ListCompany from "views/user/ListCompany"

// admin components
import Freelancers from 'views/Freelancers';
import Employers from 'views/Employers';

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
    path: '/table',
    name: 'Table List',
    icon: 'pe-7s-note2',
    component: TableList,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: 'pe-7s-news-paper',
    component: Typography,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'pe-7s-science',
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'pe-7s-map-marker',
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'pe-7s-bell',
    component: Notifications,
    layout: '/admin',
  },
  {
    upgrade: true,
    path: '/upgrade',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: Upgrade,
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
  {
    upgrade: true,
    path: '/about-us',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: AboutUs,
    layout: '',
  },
  {
    upgrade: true,
    path: '/contact-us',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: ContactUs,
    layout: '',
  },
  {
    upgrade: true,
    path: "/jobs",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: ListJob,
    layout: ""
  },
  {
    upgrade: true,
    path: "/companies",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: ListCompany,
    layout: ""
  },
  {
    upgrade: true,
    path: "/profile",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: UserProfileClinent,
    layout: ""
  },
  {
    upgrade: true,
    path: "/",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: HomePage,
    layout: '',
  },
];

export default dashboardRoutes;
