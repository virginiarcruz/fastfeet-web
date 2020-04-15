import React, { useState, useEffect } from 'react';

import history from '~/services/history';
import api from '~/services/api';

import { TableContainer } from './styles';

const Table = () => {
  const headers = ['ÏD', 'Nome', 'Email'];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get('providers');

      const data = response.data.map(user => user);

      setUsers(data);
    }

    getUsers();
  }, []);

  console.log(users);

  return (
    <TableContainer>
      <tr>
        {headers.map(item => (
          <th key={item}> {item} </th>
        ))}
      </tr>
      {users.map(user => (
        <tr key={user}>
          <td key={user.id}>{user.id}</td>
          <td key={user.name}>{user.name}</td>
          <td key={user.email}>{user.email}</td>
        </tr>
      ))}
    </TableContainer>
  );
};

export default Table;
