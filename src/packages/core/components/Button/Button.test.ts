// src/packages/core/components/Button/Button.test.ts
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { Button } from './index';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(Button, { props: { children: 'Click me' } });
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant classes correctly', () => {
    render(Button, { props: { variant: 'primary', children: 'Primary' } });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary-500');
  });

  it('applies size classes correctly', () => {
    render(Button, { props: { size: 'sm', children: 'Small' } });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('h-8');
  });

  it('handles disabled state', () => {
    render(Button, { props: { disabled: true, children: 'Disabled' } });
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
  });

  it('handles click events when not disabled', async () => {
    const mock = vi.fn();
    render(Button, {
      props: {
        onclick: mock,
        children: 'Click me'
      }
    });
    
    await fireEvent.click(screen.getByRole('button'));
    expect(mock).toHaveBeenCalled();
  });

  it('does not handle click events when disabled', async () => {
    const mock = vi.fn();
    render(Button, {
      props: {
        onclick: mock,
        disabled: true,
        children: 'Click me'
      }
    });
    
    await fireEvent.click(screen.getByRole('button'));
    expect(mock).not.toHaveBeenCalled();
  });

  it('renders with custom class', () => {
    render(Button, {
      props: {
        class: 'custom-class',
        children: 'Custom'
      }
    });
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});