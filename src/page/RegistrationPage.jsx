import { useSelector } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
} from '../redux/auth/auth-selectors';
// import { signup } from '../redux/auth/auth-operations';
import Registration from 'components/RegisterForm/Registration';
// import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  // const dispatch = useDispatch();

  // const handleSignup = data => {
  //   dispatch(signup(data));
  // };

  return (
    <main>
      {authLoading && <p>....Register in progress</p>}
      <Registration />
      {/* <RegisterForm onSubmit={handleSignup} /> */}
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </main>
  );
};

export default RegisterPage;
