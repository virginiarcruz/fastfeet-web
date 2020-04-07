import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login/Login';
import Encomendas from '../pages/Encomendas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/encomendas" exact isPrivate component={Encomendas} />
    </Switch>
  );
}
