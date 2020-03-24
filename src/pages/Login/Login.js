import React from 'react';

import logo from '~/assets/fastfeet-logo.png';
import { Logo, Form } from './styles';
import Button from '~/components/Button';

export default function Login() {
  return (
    <>
      <Logo src={logo} alt="FastFeet" />
      <Form>
        <label>Seu email</label>
        <input type="email" placeholder="exemplo@email.com" />
        <label>Sua senha</label>
        <input type="password" placeholder="*********" />
        <Button type="submit">Entrar no sistema</Button>
      </Form>
    </>
  );
}
