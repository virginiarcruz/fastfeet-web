import styled from 'styled-components';
import { grayLight, grayDark } from '../../styles/colors';

export const Logo = styled.img`
  display: flex;
  margin: 60px auto;
`;

export const Form = styled.form`
  padding: 0px 40px 60px 40px;
  label {
    color: ${grayDark};
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    display: block;
    margin-bottom: 5px;
  }
  input {
    padding: 8px 10px;
    border: 1px solid ${grayLight};
    width: 100%;
    margin-bottom: 15px;
    border-radius: 4px;
  }
`;
