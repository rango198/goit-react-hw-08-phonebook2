import { Routes, Route } from 'react-router-dom';

import PhoneBookPage from 'page/PhoneBookPage';
import LoginPage from 'page/LoginPage';
import HomePage from 'page/HomePage';
import RegisterPage from 'page/RegistrationPage';
import NotFoundPage from 'page/NotFoundPage';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SharedLayout from './SharedLayout/SharedLayout';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="phonebook" element={<PhoneBookPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
