// src/packages/core/components/Switch/Switch.test.ts
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { Switch } from './index';

describe('Switch Component', () => {
  it('renders with label', () => {
    render(Switch, { props: { label: 'Test Switch' } });
    expect(screen.getByText('Test Switch')).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(Switch);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(Switch, { props: { disabled: true, label: 'Disabled Switch' } });
    const switchButton = screen.getByRole('button');
    expect(switchButton).toHaveAttribute('data-disabled', 'true');
    expect(switchButton).toHaveClass('cursor-not-allowed');
  });

  it('toggles state on click', async () => {
    render(Switch, { props: { label: 'Toggle Switch' } });
    const switchButton = screen.getByRole('button');
    
    expect(switchButton).toHaveAttribute('data-state', 'unchecked');
    await fireEvent.click(switchButton);
    expect(switchButton).toHaveAttribute('data-state', 'checked');
  });

  it('does not toggle when disabled', async () => {
    render(Switch, { props: { disabled: true, label: 'Disabled Switch' } });
    const switchButton = screen.getByRole('button');
    
    const initialState = switchButton.getAttribute('data-state');
    await fireEvent.click(switchButton);
    expect(switchButton.getAttribute('data-state')).toBe(initialState);
  });

  it('applies custom class', () => {
    render(Switch, { props: { class: 'custom-class' } });
    const switchButton = screen.getByRole('button');
    expect(switchButton).toHaveClass('custom-class');
  });
});