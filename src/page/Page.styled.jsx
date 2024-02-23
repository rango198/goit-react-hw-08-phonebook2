import styled from '@emotion/styled';
import imgi from '../photo/imagee.png';

export const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
export const WrapContainer = styled.div`
  display: flex;
  justify-content: space-around;
  justify-content: space-around;
`;

// export const WrapTitle = styled.h1`
//   display: inline-block;
// `;

export const HomeImg = styled.div`
  background-image: url(${imgi});
  background-repeat: no-repeat;
  background-size: cover;
  width: 645px;
  height: 361px;
`;

const HomePhone = ({ children }) => {
  return <HomeImg>{children}</HomeImg>;
};

export default HomePhone;

export const Title = styled.h1`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  color: #0c1d24;

  font-size: 35px;
  text-shadow: 2px 6px 2px rgba(0, 0, 0, 0.2);
`;
