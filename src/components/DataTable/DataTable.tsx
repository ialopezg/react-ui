import { DataTableInitializer } from './DataTableInitializer';
import { DataTableProvider } from './DataTableProvider';

import './DataTable.styles.css';
import { DataTableOptions } from './prototypes';
import { FC } from 'react';

type Props = {
  options: DataTableOptions,
};

export const DataTable: FC<Props> = ({ options }) => (
  <DataTableProvider>
    <DataTableInitializer options={options}/>
  </DataTableProvider>
);
