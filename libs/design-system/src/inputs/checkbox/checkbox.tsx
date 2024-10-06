export const Checkbox = ({
  label,
  error,
  checked,
  onChange,
  disabled,
  ...props
}) => (
  <div>
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="mr-2"
        {...props}
      ></input>
      {label}
    </label>
    {error && (
      <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
        {error}
      </p>
    )}
  </div>
);
