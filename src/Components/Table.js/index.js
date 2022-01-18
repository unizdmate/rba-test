import React from "react";
import * as Bootstrap from "react-bootstrap";
import { usePagination, useTable } from "react-table";
import "./tableStyles.css";

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 3 },
    },
    usePagination
  );

  return (
    <div style={{ width: "50%", margin: "16px 16px" }}>
      <Bootstrap.Table {...getTableProps()} responsive striped hover>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length ? (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-center" colSpan={columns.length}>
                "Nema podataka"
              </td>
            </tr>
          )}
        </tbody>
      </Bootstrap.Table>
      <div className="table-pagination mt-3 d-flex align-items-baseline justify-content-between">
        <div className="table-pagination-info"></div>
        <div className="table-pagination-controls d-flex align-items-baseline justify-content-between">
          <Bootstrap.Pagination size="sm" className="ml-3">
            <Bootstrap.Pagination.First
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            />
            <Bootstrap.Pagination.Prev
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            />
            <Bootstrap.Pagination.Next
              onClick={() => nextPage()}
              disabled={!canNextPage}
            />
            <Bootstrap.Pagination.Last
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            />
          </Bootstrap.Pagination>
        </div>
      </div>
    </div>
  );
};

export default Table;
