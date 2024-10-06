export const Textarea = ({
  label,
  error,
  value,
  type,
  filled,
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
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input w-full ${className} ${size} ${error ? 'error' : status} ${filled ? 'filled' : ''}`}
      {...props}
    ></textarea>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
