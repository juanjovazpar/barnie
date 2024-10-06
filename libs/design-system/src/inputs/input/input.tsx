export const Input = ({ label, error, value, onChange, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <input value={value} onChange={onChange} {...props}></input>
    {error && <p>{error}</p>}
  </div>
);
