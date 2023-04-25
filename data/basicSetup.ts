import { DataOptions } from '../src/components/DataTable/prototypes/DataOptions';
import { DataColumns, DataRows, DataTableOptions } from '../src/components/DataTable/prototypes';

export const columns: DataColumns = [
  {
    id: 'id',
    label: 'id',
    size: '10px',
    editable: true,
    required: true,
    type: 'text',
    validation: (value: unknown) => {
      const error = value === 'whatever';

      return {
        error,
        message: error ? 'Value is not valid' : undefined,
      };
    },
  },
  {
    id: 'name',
    label: 'name',
    size: '20px',
    editable: false,
    type: 'text',
  },
  {
    id: 'age',
    label: 'age',
    size: '3px',
    editable: true,
    required: false,
    type: 'number',
    validation: (value: number) => {
      const error = value > 100;

      return {
        error,
        message: error ? 'Value is not valid' : undefined,
      };
    },
  },
  {
    id: 'adult',
    label: 'adult',
    editable: false,
    type: 'boolean',
    component: 'checkbox',
  },
  {
    id: 'birthDate',
    label: 'birth date',
    size: '10px',
    editable: false,
    type: 'date',
    component: 'date',
    format: 'YYYY-MM-DDTHH:MM:ss',
  },
];

export const rows: DataRows = [
  {
    id: '50cf',
    name: 'Kerr Mayo',
    age: 28,
    adult: true,
    birthdate: '1972-09-04T11:09:59',
  },
  {
    id: '209',
    name: 'Freda Bowman',
    age: 34,
    adult: true,
    birthdate: '1988-03-14T09:03:19',
  },
  {
    id: '2dd81ef',
    name: 'Becky Lawrence',
    age: 14,
    adult: false,
    birthdate: '1969-02-10T04:02:44',
  },
];

export const basicSetup: DataTableOptions = {
  data: {
    columns,
    rows,
  },
};
