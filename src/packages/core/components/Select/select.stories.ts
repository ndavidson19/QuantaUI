import type { Meta, StoryObj } from '@storybook/svelte';
import Select from './Select.svelte';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    items: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    placeholder: 'Select an option'
  }
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Sizes: Story = {
  render: () => ({
    Component: Select,
    props: {
      items: [
        { value: 'sm', label: 'Small' },
        { value: 'md', label: 'Medium' },
        { value: 'lg', label: 'Large' }
      ]
    }
  })
};

export const Variants: Story = {
  render: () => ({
    Component: Select,
    props: {
      items: [
        { value: 'default', label: 'Default' },
        { value: 'ghost', label: 'Ghost' },
        { value: 'outline', label: 'Outline' }
      ]
    }
  })
};