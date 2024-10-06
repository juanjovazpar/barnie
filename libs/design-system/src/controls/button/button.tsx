export const Button = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...props}>
      {label}
    </button>
  );
};
