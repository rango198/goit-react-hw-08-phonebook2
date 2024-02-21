import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Formstyled = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

export const BtnPhone = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #dc4a2ab5;
  margin-top: 50px;
  padding: 17px 7px;
  font-size: 16px;
  width: 100%;
  max-width: 250px;

  transition: background-color 0.3s ease;
  box-shadow: 3px 9px 4px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #999;
    box-shadow: inset 3px 9px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.label`
  display: flex;
  margin: 15px 0 5px 0;
`;

export const FieldInput = styled(Field)`
  border: none;
  margin-top: 8px;
  padding: 15px;
  border-radius: 3.5px;
  width: 100%;
  max-width: 250px;
  font-size: 16px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: rgba(157, 144, 168, 0.63);
`;
export const ErrorText = styled.p`
  color: #af0f0f;
  width: 180px;
  font-size: 12px;
`;
