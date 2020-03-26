import styled from 'styled-components';
import { grayLight, grayDark, red } from '../../styles/colors';

export const Logo = styled.img`
  display: flex;
  margin: 50px auto;
`;

export const FormContainer = styled.div`
  form {
    padding: 0px 40px 60px 40px;
    display: flex;
    flex-direction: column;
    button {
      margin-top: 15px;
    }
    label {
      color: ${grayDark};
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      &:not(:first-child) {
        margin-top: 15px;
      }
    }
    input {
      padding: 8px 10px;
      border: 1px solid ${grayLight};
      width: 100%;
      border-radius: 4px;
    }
    span {
      font-size: 12px;
      color: ${red};
      margin-top: 5px;
      &:not(:first-child) {
        margin-bottom: 15px;
      }
    }
  }
`;
