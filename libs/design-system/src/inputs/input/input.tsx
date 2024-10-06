export const Input = ({
  label,
  error,
  value,
  type,
  placeholder,
  disabled = false,
  className = '',
  size = '', // TODO: Think on just passing the sixe instead of full className
  status = '', // 'correct', 'warning', 'error'
  onChange,
  ...props
}) => (
  <div>
    {label && <label>{label}</label>}
    <input
      type={type || 'text'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input w-full ${className} ${size} ${status}`}
      {...props}
    ></input>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
