import { DataTableOptions } from '../src/components/DataTable/prototypes';
import { columns } from './basicSetup';

export const noRowsSetup: DataTableOptions = {
  data: {
    columns,
    rows: [],
  },
};
