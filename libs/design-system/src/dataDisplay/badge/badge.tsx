export const Badge = ({ label, type = 'blue' }) => (
  <span style={{ backgroundColor: type }}>{label}</span>
);
