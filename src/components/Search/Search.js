import React from 'react';

import { Container } from './styles';

const Search = ({ ...rest }) => (
  <Container>
    <input type="text" name="search" {...rest} />
  </Container>
);

export default Search;
