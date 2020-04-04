import styled from 'styled-components';
import {
  white,
  grayLighter,
  grayDarkPrimary,
  grayLight,
} from '../../../styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${grayLighter};
  color: ${grayDarkPrimary};
`;

export const Header = styled.header`
  height: 65px;
  background-color: ${white};
  border: 1px solid ${grayLight};
`;

export const Content = styled.div``;
