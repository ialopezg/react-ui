import { DataOptions } from './DataOptions';

/**
 * Represent all configurable options for a DataTable component.
 */
export interface DataTableOptions {
  /**
   * DataTable objects definition.
   */
  data: DataOptions;
}

export const initialOptions: DataTableOptions = {
  data: {
    columns: [],
  },
};