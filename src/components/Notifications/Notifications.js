import React from 'react';
import { MdNotifications } from 'react-icons/md';

import { Container, Badge } from './styles';

const Notifications = () => (
  <Container>
    <Badge>
      <MdNotifications color="#7159c1" size={20} />
    </Badge>
  </Container>
);

export default Notifications;
