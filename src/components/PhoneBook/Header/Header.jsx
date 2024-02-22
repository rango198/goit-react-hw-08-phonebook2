import { useSelector } from 'react-redux';

import { LogoHome, NavMenu } from './Header.styled';
import { FaHome } from 'react-icons/fa';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';

function Header() {
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);
  return (
    <header>
      <NavMenu>
        <div>
          <LogoHome to="/">
            <FaHome />
          </LogoHome>
          {isLogin && <LogoHome to="/phoneBook">PhoneBook</LogoHome>}
        </div>
        <div>
          {isLogin ? (
            <>
              <UserMenu />
            </>
          ) : (
            <>
              <LogoHome to="/register">SignUp</LogoHome>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <LogoHome to="/login">LogIn</LogoHome>
            </>
          )}
        </div>
      </NavMenu>
    </header>
  );
}

export default Header;
