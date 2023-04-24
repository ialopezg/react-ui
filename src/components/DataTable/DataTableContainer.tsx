import { DataTable as DataTableWrapper } from './DataTable';
import { DataTableProvider } from './DataTableProvider';

export const DataTable = () => {
  return (
    <DataTableProvider>
      <DataTableWrapper />
    </DataTableProvider>
  );
};

export default DataTable;
