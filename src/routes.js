
import Loadable from 'react-loadable';
import Loader from './components/Loader';

function MyLoadable(opts) {
  return Loadable(Object.assign({
    loading: Loader,
    delay: 300,
    timeout: 10000,
  }, opts));
};

export const Dashboard = MyLoadable({
  loader: () => import("./pages/Dashboard"),
  modules: ['./pages/Dashboard'],
  webpack: () => [require.resolveWeak('./pages/Dashboard')]
});
export const Login = MyLoadable({
  loader: () => import("./pages/Login"),
  modules: ['./pages/Login'],
  webpack: () => [require.resolveWeak('./pages/Login')]
});
export const Signup = MyLoadable({
  loader: () => import("./pages/Signup"),
  modules: ['./pages/Signup'],
  webpack: () => [require.resolveWeak('./pages/Signup')]
});
export const NotFound = MyLoadable({
  loader: () => import("./pages/NotFound"),
  modules: ['./pages/NotFound'],
  webpack: () => [require.resolveWeak('./pages/NotFound')]
});


export const routes = [
  {
    forNavBar: true,
    isExact: true,
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    forNavBar: true,
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    forNavBar: true,
    path: '/dash',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    forNavBar: false,
    path: '',
    component: NotFound
  },
];
