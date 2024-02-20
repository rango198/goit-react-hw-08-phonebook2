import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
} from '../redux/auth/auth-selectors';
import { signup } from '../redux/auth/auth-operations';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <h1>Please Sign Up</h1>
      {authLoading && <p>....Register in progress</p>}
      <RegisterForm onSubmit={handleSignup} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};

export default RegisterPage;
