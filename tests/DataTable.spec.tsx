import { cleanup, fireEvent, render } from '@testing-library/react';

import { DataTable } from '../src/components';
import { DataTableProvider, useDataTableState } from '../src/components/DataTable/DataTableProvider';

describe('DataTable', () => {
  afterEach(cleanup);

  it('should render the component with default options', () => {
    const { getByText } = render(<DataTable />);

    expect(getByText(/Current Counter:/i)).toBeDefined();
  });

  it('should display correct counter value', () => {
    const { getByText } = render(<DataTable />);

    expect(getByText(/Current Counter: 0/i)).toBeInTheDocument();
  });

  it('should increase button works', () => {
    const { getByText } = render(<DataTable />);
    const counter = getByText(/Current counter:/i);
    const increaseButton = getByText(/\+1/i);

    expect(counter).toHaveTextContent('Current counter: 0');
    fireEvent.click(increaseButton);
    expect(counter).toHaveTextContent('Current counter: 1');
  });

  it('should decrease button works', () => {
    const { getByText } = render(<DataTable />);
    const counter = getByText(/Current counter:/i);
    const increaseButton = getByText(/\+1/i);
    const decreaseButton = getByText(/–1/i);

    expect(counter).toHaveTextContent('Current counter: 0');
    fireEvent.click(increaseButton);
    expect(counter).toHaveTextContent('Current counter: 1');
    fireEvent.click(decreaseButton);
    expect(counter).toHaveTextContent('Current counter: 0');
  });

  it('should reset button works', async () => {
    const { getByText } = render(<DataTable />);
    const counter = getByText(/Current counter:/i);
    const increaseButton = getByText(/\+1/i);
    const resetButton = getByText(/Reset/i);

    expect(counter).toHaveTextContent('Current counter: 0');
    fireEvent.click(increaseButton)
    expect(counter).toHaveTextContent('Current counter: 1');
    fireEvent.click(resetButton);
    expect(counter).toHaveTextContent('Current counter: 0');
  });

  it('should minimum limit reached', () => {
    const { getByText } = render(<DataTable />);
    const counter = getByText(/Current counter:/i);
    const decreaseButton = getByText(/–1/i);

    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);

    expect(counter).toHaveTextContent('Current counter: 0');
  });

  it('should increase +3 counter value', () => {
    const { getByText } = render(<DataTable />);
    const counter = getByText(/Current counter:/i);
    const increaseButton = getByText(/\+1/i);

    expect(counter).toHaveTextContent('Current counter: 0');
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(counter).toHaveTextContent('Current counter: 3');
  });

  it('should useDataTable hook to retrieves correct counter value', () => {
    const TestComponent = () => {
      const { counter } = useDataTableState();

      return (<div>{counter}</div>);
    };

    const { getByText } = render(
      <DataTableProvider>
        <TestComponent />
      </DataTableProvider>,
    );

    expect(getByText(/0/i)).toBeInTheDocument();
  });
});