// DataTable.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';

import { DataTable } from "../components";

const meta: Meta<typeof DataTable> = {
  title: 'UI Kit/DataTable',
  component: DataTable,
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Basic: Story = {
  render: () => (
    <DataTable />
  ),
};
