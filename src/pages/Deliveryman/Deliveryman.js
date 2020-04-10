import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, ImgProfile } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

import PageHeader from '~/components/PageHeader';
import Avatar from '~/components/Avatar';

const Deliveryman = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Form initialData={profile} onSubmit={handleSubmit}>
      <PageHeader title="Cadastro de entregadores" />
      <Container>
        <Avatar name="avatar_id" />
        <Input name="name" label="Name" placeholder="Nome" />
        <Input name="email" label="Email" type="email" placeholder="Email" />
      </Container>
    </Form>
  );
};

export default Deliveryman;
