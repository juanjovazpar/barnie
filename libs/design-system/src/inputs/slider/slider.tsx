export const Slider = ({
  label,
  value,
  min,
  max,
  step,
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

      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        {...props}
        style={{
          width: '100%',
          ...props.style,
        }}
      />

      <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>{value}</div>

      {error && (
        <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {error}
        </p>
      )}
    </div>
  );
};
