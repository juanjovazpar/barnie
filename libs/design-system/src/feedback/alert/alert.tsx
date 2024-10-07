export const Alert = ({ type, message, description onClose }) => (
  <div
    className={`alert alert-${type}`}
    role="alert"
  >
    <h4>{message}</h4>
    {description && <p>{description}</p>}
    {onClose && (
      <button
        className="alert-close"
        onClick={onClose}
      >
        &times;
      </button>
    )}
  </div>
);
