import React from 'react';

import { TableContainer } from './styles';

const Table = () => {
  const headers = [
    'ÏD',
    'Destinatário',
    'Entregador',
    'Cidade',
    'Estado',
    'Status',
    'Ações',
  ];

  return (
    <TableContainer>
      <tr>
        {headers.map(item => (
          <th key={item}> {item} </th>
        ))}
      </tr>
      <tr>
        <td>#01</td>
        <td>Wolfgang Amadeus</td>
        <td>#01</td>
        <td>Wolfgang Amadeus</td>
        <td>#01</td>
        <td>Wolfgang Amadeus</td>
        <td>Wgang Amadeus</td>
      </tr>
      <tr>
        <td>#02</td>
        <td>Wolfgang Amadeus</td>
        <td>#01</td>
        <td>Wolfgang Amadeus</td>
        <td>#01</td>
        <td>Wolfgang Amadeus</td>
        <td>Wgang Amadeus</td>
      </tr>
      <tr>
        <td>#03</td>
        <td>Wolfgang Amadeus</td>
        <td>#01</td>
        <td>Wolfgang Amadeus</td>
        <td>#01</td>
        <td>Wolfgang Amadeus</td>
        <td>Wgang Amadeus</td>
      </tr>
    </TableContainer>
  );
};

export default Table;
