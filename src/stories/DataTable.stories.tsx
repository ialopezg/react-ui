// DataTable.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { DataTable } from '../components';
import { badSetup, noRowsSetup, basicSetup } from '../../data';

const meta: Meta<typeof DataTable> = {
  title: 'UI Kit/DataTable',
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const BasicSetup: Story = {
  render: () => (
    <DataTable options={basicSetup}/>
  ),
};

export const BadSetup: Story = {
  render: () => (
    <DataTable options={badSetup} />
  ),
};

export const NoRowsSetup: Story = {
  render: () => (
    <DataTable options={noRowsSetup}/>
  ),
};
