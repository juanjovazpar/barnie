export const Checkbox = ({ label, error, checked, onChange, ...props }) => (
  <div>
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
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
