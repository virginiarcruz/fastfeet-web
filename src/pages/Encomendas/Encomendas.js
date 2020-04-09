import React from 'react';
import api from '~/services/api';

import Title from '../../components/Title';
import TableActions from '../../components/TableActions';
import Table from '../../components/Table';

// import { Container } from './styles';

const Encomendas = () => {
  api.get('appointments');
  return (
    <>
      <Title>Gerenciando encomendas</Title>
      <TableActions />
      <Table />
    </>
  );
};

export default Encomendas;
