import styled from '@emotion/styled';

export const TitleLogin = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: center;
`;

export const BtnLogin = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #dc4a2ab5;
  margin-top: 50px;
  padding: 17px 7px;
  font-size: 16px;
  width: 100%;
  max-width: 285px;

  transition: background-color 0.3s ease;
  box-shadow: 3px 9px 4px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #999;
    box-shadow: inset 3px 9px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.label`
  display: flex;
  margin: 10px 0 5px 0;
`;

export const Input = styled.input`
  border: none;
  padding: 15px;
  border-radius: 3.5px;
  width: 100%;
  max-width: 250px;
  font-size: 16px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: rgba(157, 144, 168, 0.63);
`;
