import styled from 'styled-components';
import { purpleDark, purpleLight } from '~/styles/colors';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 10px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  input {
    display: none;
  }
`;

export const Image = styled.img`
  background-color: ${purpleLight};
  border: 1px solid ${purpleDark};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;
