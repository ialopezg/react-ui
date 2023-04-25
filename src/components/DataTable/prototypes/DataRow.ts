export type DataRow = {
  /**
   * Row ID
   */
  id: string | number,
  /**
   * Key pair value for the fields
   */
  [key: string]: unknown,
};

/**
 * DataRow collection.
 */
export type DataRows = Array<DataRow>;
