export const Input = ({ label, error, value, type, onChange, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <input
      type={type || 'text'}
      value={value}
      onChange={onChange}
      {...props}
    ></input>
    {error && (
      <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
        {error}
      </p>
    )}
  </div>
);
