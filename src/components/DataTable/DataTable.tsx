import Button from '../Button';
import {
  useDataTable,
  useDataTableState
} from './DataTableProvider';

import './DataTable.styles.css';

export const DataTable = () => {
  const { state, updateState } = useDataTable();
  const { counter } = useDataTableState();

  const decrease = () => {
    updateState({ counter: counter > 0 ? counter - 1 : 0 });
  };

  const increase = () => {
    updateState({ counter: counter + 1 });
  };

  const reset = () => {
    updateState({ counter: 0 });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <span>Current counter: {counter}</span>
      <Button onClick={decrease}>–1</Button>
      <Button onClick={reset}>Reset</Button>
      <Button variant="primary" onClick={increase}>+1</Button>
    </div>
  );
};
