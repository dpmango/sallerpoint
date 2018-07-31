
import Loadable from 'react-loadable';
import Loader from './components/Loader';

function MyLoadable(opts) {
  return Loadable(Object.assign({
    loading: Loader,
    delay: 300,
    timeout: 10000,
  }, opts));
};

export const Home = MyLoadable({
  loader: () => import("./pages/Home"),
  modules: ['./pages/Home'],
  webpack: () => [require.resolveWeak('./pages/Home')]
});
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
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    isExact: true,
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dash',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '',
    component: NotFound
  },
];
