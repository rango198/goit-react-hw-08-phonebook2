import { useDispatch } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuUser, MenyBtn, UserName } from './UserMenu.styled';
import { ImExit } from 'react-icons/im';
import { RxAvatar } from 'react-icons/rx';
import { logout } from '../../../redux/auth/auth-operations';
// import { selectUser } from '../../../redux/auth/auth-selectors';

const UserMenu = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <MenuUser>
      <UserName>
        <RxAvatar />
        {/* {user.name} */}
      </UserName>
      <MenyBtn onClick={handleLogOut}>
        <ImExit />
        Logout
      </MenyBtn>
    </MenuUser>
  );
};

export default UserMenu;
