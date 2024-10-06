export const DatePicker = ({ label, value, onChange, error, ...props }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          {label}
        </label>
      )}

      <input
        type="date"
        value={value}
        onChange={onChange}
        {...props}
        style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '4px',
          borderColor: error ? 'red' : '#ccc',
          ...props.style,
        }}
      />

      {error && (
        <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {error}
        </p>
      )}
    </div>
  );
};
