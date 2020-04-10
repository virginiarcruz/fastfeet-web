import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

const Search = ({ ...rest }) => (
  <Container>
    <MdSearch />
    <Input
      type="text"
      name="search"
      placeholder="Buscar por encomendas"
      {...rest}
    />
  </Container>
);

export default Search;
