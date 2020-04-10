import React from 'react';

import { ButtonWrapper } from './styles';

export default function Button({ children, ...props }) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}
