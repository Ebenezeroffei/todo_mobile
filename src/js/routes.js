import SignInPage from '../pages/signin.f7.html';
import SignUpPage from '../pages/signup.f7.html';

var routes = [
  {
    path: '/',
    component: SignInPage,
    name: 'sign-in',
  },
  {
    path: '/sign-up/',
    component: SignUpPage,
    name: 'sign-up',
  }
  // {
  //   path: '(.*)',
  //   component: NotFoundPage,
  // },
];

export default routes;