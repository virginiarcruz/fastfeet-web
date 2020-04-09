import styled from 'styled-components';
import { white, grayLight } from '../../styles/colors';

export const HeaderContainer = styled.header`
  height: 70px;
  background-color: ${white};
  border: 1px solid ${grayLight};
  padding: 20px 30px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-height: 30px;
  margin-right: 60px;
`;

export const Nav = styled.nav`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
`;
export const MenuItem = styled.li`
  text-transform: uppercase;
  font-size: 15px;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const Aside = styled.aside``;
