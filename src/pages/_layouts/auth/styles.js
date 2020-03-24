import styled from 'styled-components';
import { purple, white } from '../../../styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${purple};
  color: ${white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background-color: ${white};
  border-radius: 4px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.24);
`;
