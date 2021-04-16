/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import PrevContext from '../service/PrevContext';
import './StylePlanning.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import COLUMNS from '../components/table-components/Columns';
import DataCell from '../components/table-components/DataCell';

const TablePrev = () => {
  const { prevName } = useContext(PrevContext);
  const { firstname, lastname } = prevName;

  return (
    <div className="block-planning-prev">
      <Table bordered style={{ color: 'navy', fontWeight: 'bold' }}>
        <thead>
          <tr className="row0">
            <td className="month-title" colSpan="31">
              <input type="month" />
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
        {prevName.map((i) => (
          <tbody>
            <tr className="row0">
              <th
                key={i._id}
                value={(firstname, lastname)}
                className="column0"
                rowSpan="2"
              >
                {i.firstname}
                {i.lastname}
              </th>
              {DataCell.map((id) => (
                <td key={id.key} value={id.col} className="column1">
                  {id.col}
                </td>
              ))}
            </tr>
            <tr className="row1">
              {DataCell.map((item) => (
                <td key={item.key} value={item.col} className="column2">
                  {item.col}
                </td>
              ))}
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
export default TablePrev;