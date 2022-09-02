import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Column,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';

import './styles.scss';

import { Concept } from '../../types';
import { CREATE_EDIT_CONCEPT_ROUTE } from '../../constants';

const Filter = ({ column }: { column: Column<any, any> }) => {
  const columnFilterValue = column.getFilterValue()

  return (
    <input
      type="text"
      value={(columnFilterValue ?? '') as string}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="border shadow rounded concepts-header-search"
    />
  );
};

const Table = ({ data, columns, }: { data: Concept[], columns: ColumnDef<Concept>[] }) => {
  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="p-2 concepts">
      <table className="w-100 border border-2 rounded">
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <th key={header.id} colSpan={header.colSpan} className="fw-bold concepts-header">
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column}/>
                        </div>
                      ) : null}
                    </div>
                  )}
                </th>
              )
            })}
          </tr>
        ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map(row => {
          return (
            <tr key={row.id} onClick={() => {
              if (row.original._id) {
                navigate(CREATE_EDIT_CONCEPT_ROUTE(row.original._id));
              }
            }}>
              {row.getVisibleCells().map(cell => {
                return (
                  <td key={cell.id} className="align-middle concepts-body">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
        </tbody>
        <tfoot>
        <tr>
          <td
            colSpan={6}
            className="py-2 text-center fw-bold concepts-footer"
          >
            <div>
              <button
                className="border rounded p-1"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {'<<'}
              </button>
              <button
                className="border rounded p-1"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {'<'}
              </button>
              <button
                className="border rounded p-1"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {'>'}
              </button>
              <button
                className="border rounded p-1"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                {'>>'}
              </button>
            </div>
          </td>
        </tr>
        </tfoot>
      </table>
      <div className="d-flex flex-column align-items-center gap-3">
        <div>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </div>
        <div>
          Go to page:
          <input
            className="ms-3 border rounded concepts-page-input"
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
          />
        </div>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>Show: {pageSize}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

interface ConceptsListProps {
  concepts: Concept[];
}

export const ConceptsList: React.FC<ConceptsListProps> = ({ concepts }) => {
  const columnHelper = createColumnHelper<Concept>();

  const columns: ColumnDef<Concept, any>[] = [
    columnHelper.accessor('conceptId', {
      id: 'conceptId',
      cell: info => info.getValue(),
      header: () => <span>ID</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('displayName', {
      id: 'displayName',
      cell: info => info.getValue(),
      header: () => <span>NAME</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('description', {
      id: 'description',
      cell: info => info.getValue(),
      header: () => <span>DESCRIPTION</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('parentIds', {
      id: 'parentIds',
      cell: info => info.getValue(),
      header: () => <span>PARENT IDs</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('childIds', {
      id: 'childIds',
      cell: info => info.getValue(),
      header: () => <span>CHILD IDs</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('alternateNames', {
      id: 'alternateNames',
      cell: info => info.getValue(),
      header: () => <span>ALT NAMES</span>,
      footer: info => info.column.id,
    })
  ];

  return (
    <>
      <Table
        {...{
          data: concepts,
          columns,
        }}
      />
      <hr/>
    </>
  );
};




