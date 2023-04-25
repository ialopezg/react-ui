import { useDataTableRows } from '../../DataTableProvider';
import { TableBody, TableCell, TableRow } from '@mui/material';

export const Body = () => {
  const rows = useDataTableRows();

  return (
    <TableBody>
      {rows.map((row, rowIndex) => (
        <TableRow key={`row-${rowIndex}`}>
          {Object.keys(row).map((key, cellIndex) => (
            <TableCell
              key={`row-${rowIndex}_cell-${cellIndex}`}
              align={cellIndex > 0 ? 'right' : 'left'}
              component={cellIndex === 0 ? 'th' : undefined}
              scope={cellIndex === 0 ? 'row' : undefined}
            >
              <div>{String(row[key])}</div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};