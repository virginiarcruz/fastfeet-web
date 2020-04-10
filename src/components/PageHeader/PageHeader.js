import React from 'react';

import Button from '../Button';

import { Container, Title } from './styles';

const PageHeader = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <Button>Voltar</Button>
    <Button type="submit">Salvar</Button>
  </Container>
);

export default PageHeader;
