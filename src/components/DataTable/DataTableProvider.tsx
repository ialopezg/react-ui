import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import {
  DataColumns,
  DataRows,
  DataTableOptions,
  initialOptions,
} from './prototypes';

export interface DataTableContextProps {
  state: DataTableOptions;
  updateState: (updates: Partial<DataTableOptions>) => void;
}

export const initialDataTableOptions: DataTableContextProps = {
  state: initialOptions,
  updateState: () => {},
};

export const DataTableContext = createContext<DataTableContextProps>(initialDataTableOptions);

export const DataTableProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<DataTableOptions>(initialDataTableOptions.state);

  const updateState = (updates: Partial<DataTableOptions>) => {
    const updatedState = { ...state, ...updates } as DataTableOptions;

    setState(updatedState);
  }

  return (
    <DataTableContext.Provider value={{ state, updateState }}>
      {children}
    </DataTableContext.Provider>
  );
};

export const useDataTable = () => useContext(DataTableContext);

export const useDataTableState = () => {
  const { state } = useDataTable();

  return state;
};

export const useDataTableData = () => {
  const { data } = useDataTableState();

  return data;
};

export const useDataTableColumns = (): DataColumns => {
  const { columns } = useDataTableData();

  return columns;
};


export const useDataTableRows = (): DataRows => {
  const { rows } = useDataTableData();

  return rows || [];
};
