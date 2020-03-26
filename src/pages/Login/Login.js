import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';
import { Logo, FormContainer } from './styles';
import Button from '~/components/Button';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = ({email, password}) => {
    dispatch(loginRequest(email, password))
  };
  return (
    <>
      <Logo src={logo} alt="FastFeet" />
      <FormContainer>
        <Form schema={schema} onSubmit={handleSubmit}>
          <label>Seu email</label>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <label>Sua senha</label>
          <Input name="password" type="password" placeholder="*********" />
          <Button type="submit">Entrar no sistema</Button>
        </Form>
      </FormContainer>
    </>
  );
}
