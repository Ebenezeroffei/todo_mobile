import SignInPage from '../pages/signin.f7.html';
import SignUpPage from '../pages/signup.f7.html';
import ForgotPasswordPage from '../pages/forgot_password.f7.html';

var routes = [
  {
    path: '/',
    component: SignInPage,
    name: 'sign-in',
  },
  // {
  //   path: '/',
  //   component: ForgotPasswordPage,
  //   name: 'sign-in',
  // },
  {
    path: '/sign-up/',
    component: SignUpPage,
    name: 'sign-up',
  },
  {
    path: '/forgot-password/',
    component: ForgotPasswordPage,
    name: 'forgot-password'
  }
  // {
  //   path: '(.*)',
  //   component: NotFoundPage,
  // },
];

export default routes;