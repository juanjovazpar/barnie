/**
 * Alert Component
 *
 * The Alert component displays a notification message to the user with an optional description.
 * It can represent different types of alerts, such as success, error, or warning.
 *
 * Props:
 *
 * - `type` (TAlertType): The type of alert to display, determining the visual style (success, error, or warning).
 * - `message` (string): The main message to display in the alert.
 * - `description` (string, optional): Additional information about the alert.
 * - `onClose` (function): Callback function to be called when the alert is closed.
 *
 * Usage:
 *
 * ```jsx
 * <Alert
 *   type="success"
 *   message="Operation completed successfully."
 *   description="Your changes have been saved."
 *   onClose={() => console.log('Alert closed')}
 * />
 * ```
 */

export type TAlertType = 'success' | 'error' | 'warning';

export interface IAlertProps {
  type: TAlertType;
  message: string;
  description?: string;
  onClose: () => void;
}

export const Alert = ({ type, message, description, onClose }: IAlertProps) => (
  <div className={`alert alert-${type}`} role="alert">
    <div className="w-10 text-start">icon</div>
    <h4>{message}</h4>
    {description && <p>{description}</p>}
    {onClose && (
      <button className="alert-close" onClick={onClose}>
        &times;
      </button>
    )}
  </div>
);
