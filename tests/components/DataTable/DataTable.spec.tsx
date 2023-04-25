import { cleanup, render } from '@testing-library/react';

import { DataTable } from '../../../src';
import {
  DataTableProvider,
  useDataTable,
  useDataTableState,
} from '../../../src/components/DataTable/DataTableProvider';
import { badSetup, basicSetup, noRowsSetup, rows } from '../../../data';
import { useEffect } from 'react';

describe('DataTable', () => {
  afterEach(cleanup);

  it('should render the component with basic setup', () => {
    const { getAllByRole, getByRole } = render(<DataTable options={basicSetup}/>);

    const table = getByRole('table');
    expect(table).toBeDefined();
    expect(table.querySelector('thead')).toBeDefined();
    expect(table.querySelector('tbody')).toBeDefined();
    expect(getAllByRole('rowgroup')).toHaveLength(2);
    expect(getAllByRole('row')).toHaveLength(4);
    const columns = getAllByRole('columnheader');
    expect(columns).toHaveLength(5);
    expect(getAllByRole('cell'))
      .toHaveLength((columns.length * rows.length) - 3);
  });

  it('should render the component with no rows', () => {
    const { getByRole } = render(<DataTable options={noRowsSetup}/>);

    const table = getByRole('table');
    expect(table.querySelector('.no-data')).toBeDefined();
  });

  it('should render the component with bad setup', () => {
    const { container } = render(<DataTable options={badSetup}/>);

    expect(container.querySelector('.bad-setup')).toBeDefined();
  });

  it('should useDataTable hook to retrieves correct counter value', () => {
    const TestComponent = () => {
      const { data } = useDataTableState();

      return (<div className="data">{JSON.stringify(data)}</div>);
    };

    const { container } = render(
      <DataTableProvider>
        <TestComponent/>
      </DataTableProvider>,
    );

    expect(container.querySelector('.data')).toBeInTheDocument();
  });

  it('should useDataTable hook to retrieves correct counter value', () => {
    const TestComponent = () => {
      const { state, updateState } = useDataTable();

      useEffect(() => {
        const updateOptions = () => {
          updateState(basicSetup);
        };

        updateOptions();

        return () => {};
      }, []);

      return (<div className="data">{JSON.stringify(state.data)}</div>);
    };

    const { container } = render(
      <DataTableProvider>
        <TestComponent/>
      </DataTableProvider>,
    );

    expect(container.querySelector('.data')).toBeInTheDocument();
  });
});