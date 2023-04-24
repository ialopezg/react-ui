import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

export interface DataTableState {
  counter: number;
}

export const initialDataTableState: DataTableState = {
  counter: 0,
};

export interface DataTableContextProps {
  state: DataTableState;
  updateState: (updates: Partial<DataTableState>) => void;
}

export const initialDataTableOptions: DataTableContextProps = {
  state: initialDataTableState,
  updateState: (_updates: Partial<DataTableState>) => {},
};

export const DataTableContext = createContext<DataTableContextProps>(initialDataTableOptions);

export const DataTableProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<DataTableState>(initialDataTableOptions.state);

  const updateState = (updates: Partial<DataTableState>) => {
    const updatedState = { ...state, ...updates } as DataTableState;

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
