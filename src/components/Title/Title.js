import React from 'react';

import { TitlePage } from './styles';

const Title = ({ children, ...rest }) => (
  <TitlePage {...rest}> {children} </TitlePage>
);

export default Title;
