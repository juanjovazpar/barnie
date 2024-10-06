export const Select = ({
  label,
  options,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        {...props}
        style={{
          borderColor: error ? 'red' : '#ccc',
          borderWidth: '1px',
          padding: '0.5rem',
          borderRadius: '4px',
          width: '100%',
        }}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {error}
        </p>
      )}
    </div>
  );
};
