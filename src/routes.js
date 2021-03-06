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

// user components
import UserLoginView from 'views/user/UserLogin';
import UserRegisterView from 'views/user/UserRegister';
import HomePage from 'views/user/Home';
import AboutUs from 'views/user/AboutUs';
import ContactUs from 'views/user/ContactUs';
import UserProfileClinent from 'views/user/UserProfile';
import ListJob from 'views/user/ListJob';
import ListCompany from 'views/user/ListCompany';
import JobDetail from 'views/user/JobDetail';
import PostAJob from 'views/user/PostAJob';

// admin components
import Freelancers from 'views/Freelancers';
import Employers from 'views/Employers';
import EmployerRequests from 'views/EmployerRequests';
import UserProfile from 'views/UserProfile';

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
    path: '/jobs',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: ListJob,
    layout: '',
  },
  {
    upgrade: true,
    path: '/companies',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: ListCompany,
    layout: '',
  },
  {
    upgrade: true,
    path: '/profile',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: UserProfileClinent,
    layout: '',
  },
  {
    upgrade: true,
    path: '/job-detail',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: JobDetail,
    layout: '',
  },
  {
    upgrade: true,
    path: '/post-a-job',
    component: PostAJob,
    layout: '',
  },
  {
    upgrade: true,
    path: '/',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
    component: HomePage,
    layout: '',
  },
];

export default dashboardRoutes;
