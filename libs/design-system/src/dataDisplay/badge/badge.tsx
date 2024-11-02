/**
 * Badge Component
 *
 * The Badge component displays a small count or status descriptor. It can be styled
 * as a square or pill shape and supports various sizes and colors for customization.
 *
 * Props:
 *
 * - `label` (string): The text to display inside the badge.
 * - `type` (TBadgeType, optional): The shape of the badge, which can be "square" or "pill". Defaults to "square".
 * - `size` (TBadgeSize, optional): The size of the badge, which can be "default", "xsmall", "small", or "large". Defaults to "default".
 * - `color` (TBadgeColor, optional): The color of the badge, which can be "blue", "red", "orange", "yellow", "green", or "gray". Defaults to "blue".
 *
 * Usage:
 *
 * ```jsx
 * <Badge label="New" type="pill" size="small" color="green" />
 * ```
 */

export type TBadgeType = 'square' | 'pill';
export type TBadgeSize = 'default' | 'xsmall' | 'small' | 'large';
export type TBadgeColor =
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'gray';

export interface IBadgeProps {
  label: string;
  type?: TBadgeType;
  size?: TBadgeSize;
  color?: TBadgeColor;
}

export const Badge = ({ label, type, size, color = 'blue' }: IBadgeProps) => (
  <span className={`badge badge-${type} badge-${size} badge-${color}`}>
    {label}
  </span>
);
