import styled from 'styled-components';

import { purple, white } from '../../styles/colors';

export const ButtonWrapper = styled.button`
  background-color: ${purple};
  color: ${white};
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 8px 10px;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover {
    filter: brightness(95%);
  }
`;
