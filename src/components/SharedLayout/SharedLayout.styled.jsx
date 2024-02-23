import styled from '@emotion/styled';
import React from 'react';
import img from '../../photo/cup-of-coffee-1280537_1920.jpg';


const Background = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
`;

const BackgroundHome = ({ children }) => {
  return <Background>{children}</Background>;
};

export default BackgroundHome;

export const Container = styled.main`
  /* display: flex; */
  height: 500px;
  /* flex-direction: column; */
  width: 100%;
  max-width: 900px;
  margin: 25px auto;
  background-color: rgba(157, 144, 168, 0.63);
  /* align-items: center; */
  /* justify-content: space-around; */
  box-shadow: 0px 20px 20px 9px rgba(0, 0, 0, 1.2);
  margin-bottom: 200px;
  padding-bottom: 50px;
  border-radius: 20px;
`;

export const BoxForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
