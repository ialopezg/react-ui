import { Table, TableBody, TableCell, TableRow } from '@mui/material';

import { useDataTableColumns, useDataTableRows } from './DataTableProvider';
import { Header } from './partials';
import { Body } from './partials/Body';

export const DataTableBuilder = () => {
  const columns = useDataTableColumns();
  const rows = useDataTableRows();

  return (
    <>
      {columns.length > 0 && (
        <Table>
          <Header />
          {rows.length > 0 && (
            <Body />
          )}
          {!rows.length && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <div className="no-data">There is no data yet!</div>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      )}
      {(!columns.length && !rows.length) && (
        <div className="bad-setup">
          <strong>DataTable is misconfigured!</strong>
          {' '}
          Please, provide required options.
        </div>
      )}
    </>
  );
};
