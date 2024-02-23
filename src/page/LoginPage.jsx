import { useSelector } from 'react-redux';

// import LoginForm from '../components/LoginForm/LoginForm';

// import { login } from '../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../redux/auth/auth-selectors';
import Login from 'components/LoginForm/Login';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  // const dispatch = useDispatch();

  // const handleLogin = data => {
  //   dispatch(login(data));
  // };

  return (
    <div>
      {authLoading && <p>....Login in progress</p>}
      <Login />
      {/* <LoginForm onSubmit={handleLogin} /> */}
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};

export default LoginPage;
