import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, Logo, Nav, Menu, MenuItem } from './styles';
import Logotipo from '~/assets/fastfeet-logo.png';

export default function Header() {
  const menuItems = [
    'Encomendas',
    'Entregadores',
    'Destinatários',
    'Problemas',
  ];
  return (
    <HeaderContainer>
      <Nav>
        <Link to="/encomendas">
          <Logo src={Logotipo} alt="FastFeet" />
        </Link>
        <Menu>
          {menuItems.map(item => (
            <MenuItem key={item}> {item} </MenuItem>
          ))}
        </Menu>
      </Nav>
    </HeaderContainer>
  );
}
