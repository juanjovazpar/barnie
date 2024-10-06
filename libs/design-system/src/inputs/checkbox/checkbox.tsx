export const Checkbox = ({ label, checked, onChange, ...props }) => (
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
  </div>
);
