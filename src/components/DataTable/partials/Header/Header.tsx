import { TableCell, TableHead, TableRow } from '@mui/material';

import { useDataTableColumns } from '../../DataTableProvider';

export const Header = () => {
  const columns = useDataTableColumns();

  return (
    <TableHead>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={`column-${index}`} align={index === 0 ? 'left' : 'right'}>
            <div>{column.label}</div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
