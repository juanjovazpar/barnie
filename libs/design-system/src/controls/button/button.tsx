/**
 * Button Component
 *
 * The Button component is a customizable button element that can trigger actions when clicked.
 * It supports different types (button, submit, reset) and can be disabled.
 *
 * Props:
 *
 * - `label` (string): The text to display on the button.
 * - `onClick` (function): Callback function to be called when the button is clicked.
 * - `type` (TButtonType, optional): The type of button, which can be "button", "submit", or "reset". Defaults to "button".
 * - `disabled` (boolean, optional): If true, the button is disabled and cannot be interacted with. Defaults to false.
 * - `className` (string, optional): Additional CSS classes to apply to the button.
 * - `size` (string, optional): CSS class that determines the size of the button.
 * - `[key: string]: unknown`: Allows additional properties to be passed to the button element.
 *
 * Usage:
 *
 * ```jsx
 * <Button
 *   label="Click Me"
 *   onClick={() => console.log('Button clicked!')}
 *   type="submit"
 *   className="primary"
 * />
 * ```
 */

import { Spinner } from '../../feedback/spinner';

export type TButtonType = 'button' | 'submit' | 'reset';

export interface IButtonProps {
  label: string;
  onClick?: () => void;
  type?: TButtonType;
  disabled?: boolean;
  className?: string;
  size?: string;
  loading?: boolean;
  [key: string]: unknown;
}

export const Button = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = '',
  loading,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`btn ${className} ${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {loading && (
        <span className="btn-spinner">
          <Spinner className={size.replace('btn-', 'spinner-')} />
        </span>
      )}
      {label}
    </button>
  );
};
