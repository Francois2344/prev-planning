import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../components/table-components/Columns";
import { DATA } from "../components/table-components/Data";



function Prevention() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columns, data: data });

  return (
    <div>
      <table {...getTableProps()} style={{ border: "solid 1px lightgrey",
    width: '200%' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    background: "lightgrey",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        border: "solid 1px gray",
                        height: '100px'
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Prevention;
