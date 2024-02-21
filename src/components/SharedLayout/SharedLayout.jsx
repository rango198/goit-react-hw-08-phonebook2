import Navbar from 'components/Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import BackgroundHome, { BoxForm, Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <BackgroundHome>
      <Container>
        <Navbar />
        <BoxForm>
          <Suspense fallback={<p>...Loading page</p>}>
            <Outlet />
          </Suspense>
        </BoxForm>
      </Container>
    </BackgroundHome>
  );
};

export default SharedLayout;
