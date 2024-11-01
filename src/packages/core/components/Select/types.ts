import type { SelectProps as BitsSelectProps } from 'bits-ui';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export interface SelectProps extends Omit<BitsSelectProps, 'items'> {
  items?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
  fullWidth?: boolean;
}