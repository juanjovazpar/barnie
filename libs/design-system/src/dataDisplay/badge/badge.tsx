export interface IBadgeProps {
  label: string;
  type?: 'square' | 'pill';
  size?: 'default' | 'xsmall' | 'small' | 'large';
  color?: 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'gray';
}

export const Badge = ({ label, type, size, color = 'blue' }: IBadgeProps) => (
  <span className={`badge badge-${type} badge-${size} badge-${color}`}>
    {label}
  </span>
);
