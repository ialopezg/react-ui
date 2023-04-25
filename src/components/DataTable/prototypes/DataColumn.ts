import { Options } from './Option';

/**
 * Represents a data column object.
 */
export interface DataColumn {
  /**
   * Component when row value is editable (checkbox, datePicker, select).
   */
  component?: string;
  /**
   * Whether row value is editable.
   */
  editable?: boolean;

  /**
   * Column date format when type is date.
   *
   * Required only when data type is date.
   */
  format?: string;

  /**
   * Column ID (must be unique).
   */
  id: string;

  /**
   * 	Column label.
   */
  label: string;

  /**
   * Whether field is required.
   */
  required?: boolean

  /**
   * Column size (between 1px and 15px).
   */
  size?: string;

  /**
   * Column data type.
   *
   * Accepted values: boolean, text, number, date, datetime, time.
   */
  type?: string;

  /**
   * Display values for select component.
   *
   * Required only when component type is select.
   */
  values?: Options;

  /**
   * Column value validation function.
   */
  validation?: (value: any) => void
}

/**
 * Columns collection.
 */
export type DataColumns = Array<DataColumn>;
