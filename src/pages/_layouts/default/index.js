import React from 'react';

import { Wrapper, Header } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />

      {children}
    </Wrapper>
  );
}
