/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import PrevContext from '../service/PrevContext';
import './StylePlanning.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import COLUMNS from './table-components/Columns';

const TablePrev = () => {
  const { prevName } = useContext(PrevContext);
  const { firstname, lastname } = prevName;

  return (
    <div className="block-planning-prev">
      <Table bordered style={{ color: 'navy', fontWeight: 'bold' }}>
        <thead>
          <tr className="row0">
            <td className="month-title" colSpan="31">
              JANVIER
            </td>
          </tr>
          <tr className="row1">
            <td>Preventeur</td>
            {COLUMNS.map((i) => (
              <td key={i.accessor} value={i.Header}>
                {i.Header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="row0">
            <th className="column0" rowSpan="2">
              {firstname}
              {lastname}
            </th>
            <td className="column1">Bureau</td>
          </tr>
          <tr className="row1">
            <td className="column1">audit</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default TablePrev;
