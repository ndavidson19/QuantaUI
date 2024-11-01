import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Select from './select.svelte';

describe('Select', () => {
  const items = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true }
  ];

  it('renders with default props', () => {
    const { getByRole } = render(Select, { props: { items } });
    expect(getByRole('combobox')).toBeTruthy();
  });

  it('shows placeholder when no value is selected', () => {
    const { getByText } = render(Select, {
      props: { items, placeholder: 'Select an option' }
    });
    expect(getByText('Select an option')).toBeTruthy();
  });

  it('disables the select when disabled prop is true', () => {
    const { getByRole } = render(Select, { props: { items, disabled: true } });
    expect(getByRole('combobox')).toHaveAttribute('aria-disabled', 'true');
  });
});
