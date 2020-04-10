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
  border-radius: 95px;
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
