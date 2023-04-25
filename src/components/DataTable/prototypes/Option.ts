/**
 * Select Option.
 */
export interface Option {
  /**
   * Text be displayed.
   */
  label: string;

  /**
   * Option value.
   */
  value: string;
}

/**
 * Option collection.
 */
export type Options = Array<Option>
