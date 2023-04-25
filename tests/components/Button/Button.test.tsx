import { cleanup, render } from '@testing-library/react';

import { Button } from '../../../src';

describe('Button', () => {
  afterEach(cleanup);

  it('should render a white button with MacOS X style', function () {
    const { getByRole } = render(<Button onClick={() => {}}></Button>);

    const element = getByRole('button');
    expect(element).toHaveClass('btn');
  });

  it('should render a blue button with MacOS X style', function () {
    const { getByRole } = render(
      <Button variant='primary' onClick={() => {}}></Button>
    );

    const element = getByRole('button');
    expect(element).toHaveClass('btn-primary');
  });

  it('should render a disable blue button with MacOS X style', function () {
    const { getByRole } = render(
      <Button variant='primary' onClick={() => {}} disabled></Button>
    );

    const element = getByRole('button');
    expect(element).toHaveClass('btn');
  });
});
