export const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
  error,
  ...props
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          {...props}
          style={{
            marginRight: '0.5rem',
            width: '1rem',
            height: '1rem',
            ...props.style,
          }}
        />
        {label}
      </label>

      {error && (
        <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {error}
        </p>
      )}
    </div>
  );
};
