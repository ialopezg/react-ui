import { DataColumns } from './DataColumn';
import { DataRows } from './DataRow';

/**
 * Represents DataTable options as column and row collections.
 */
export interface DataOptions {
  /**
   * DataTable column collection.
   */
  columns: DataColumns;
  /**
   * DataTable row collection.
   */
  rows?: DataRows;
}