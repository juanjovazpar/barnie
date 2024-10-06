export const Button = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = '',
  ...props
}) => {
  return (
    <button
      className={`btn ${className} ${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
