export const Button = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
