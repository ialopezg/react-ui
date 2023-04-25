import { DataTableBuilder } from './DataTableBuilder';
import { DataTableOptions } from './prototypes';
import { FC, useEffect } from 'react';
import { useDataTable } from './DataTableProvider';

type Props = {
  options: DataTableOptions,
};

export const DataTableInitializer: FC<Props> = ({ options }) => {
  const { updateState } = useDataTable();

  useEffect(() => {
    const updateOptions = () => {
      updateState(options);
    };

    updateOptions();

    return () => {};
  }, [options]);

  return (
    <DataTableBuilder />
  );
};
