import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 16px auto;
  max-width: 600px;
  background-color: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.41);
  :focus-within {
    box-shadow: 4px 4px 8px 0px rgba(249, 105, 14, 1);
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Icon = styled(FcSearch)`
  width: 16px;
  height: 16px;
`;
