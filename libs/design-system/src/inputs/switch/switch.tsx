export const Switch = ({
  label,
  checked,
  error,
  value,
  type,
  onChange,
  ...props
}) => (
  <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
    {label && <label style={{ marginRight: '0.5rem' }}>{label}</label>}

    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      {...props}
      style={{
        width: '40px',
        height: '20px',
        cursor: 'pointer',
        appearance: 'none',
        backgroundColor: checked ? '#4CAF50' : '#ccc',
        borderRadius: '20px',
        position: 'relative',
        outline: 'none',
      }}
    />

    <span
      style={{
        position: 'absolute',
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        backgroundColor: 'white',
        transition: 'transform 0.3s',
        transform: checked ? 'translateX(20px)' : 'translateX(0)',
      }}
    />

    {error && (
      <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
        {error}
      </p>
    )}
  </div>
);
