/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import PrevContext from '../service/PrevContext';
import './StylePlanning.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import COLUMNS from './table-components/Columns';
import DATA from './table-components/DataCell';

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
              {DATA.map((id) => (
                <td key={id.key} value={(id.col, id.col1)} className="column1">
                  {id.col}
                  {id.col1}
                </td>
              ))}
            </tr>
            <tr className="row1">
              {DATA.map((item) => (
                <td
                  key={item.key}
                  value={(item.col, item.col1)}
                  className="column2"
                >
                  {item.col}
                  {item.col1}
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
