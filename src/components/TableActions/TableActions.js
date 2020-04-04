import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';
import Button from '../Button';
import Search from '../Search';

const TableActions = () => (
  <Container>
    <Search placeholder="Buscar por encomendas" />
    <Button>
      <MdAdd />
      Cadastrar
    </Button>
  </Container>
);

export default TableActions;
