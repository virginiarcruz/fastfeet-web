import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { HeaderContainer, Logo, Nav, Menu, MenuItem } from './styles';
import Logotipo from '~/assets/fastfeet-logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const menuItems = [
    'Encomendas',
    'Entregadores',
    'Destinatários',
    'Problemas',
  ];

  function handleSignout() {
    dispatch(signOut());
  }
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
        <aside>
          <p>{profile.name}</p>
          <button onClick={handleSignout}> Sair daqui</button>
        </aside>
      </Nav>
    </HeaderContainer>
  );
}
