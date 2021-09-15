import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { Columns } from "./Column";
import './table.css'

const Tables = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInitial = useTable({
    columns: columns,
    data: data,
  },useFilters,useSortBy);

const {getTableProps,getTableBodyProps,rows,headerGroups,prepareRow} = tableInitial;

  return (
      <>

    <table{...getTableProps()}>
      <thead>
          {headerGroups.map((headerGroup)=>(
        <tr{...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((columns)=>(

            <th{...columns.getHeaderProps(columns.getSortByToggleProps())}>
            {columns.render('Header')}
            <span>
                {columns.isSorted ? (columns.isSortedDesc ? ' 🔼 ':' 🔽 '):''}
            </span>
            <div className="column_div">
            {columns.canFilter ? columns.render('Filter') : null}
          </div>
            </th>
        ))}
        </tr>

          ))}
      </thead>
      <tbody{...getTableBodyProps()}>
      {rows.map(row=>{
          prepareRow(row)
          return(
        <tr{...row.getRowProps()}>
        {
            row.cells.map(cell=>{
                return(

                    <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                )
            })
        }
        </tr>

          )
      })}
      </tbody>
    </table>
    </>
  );
};

export default Tables;
