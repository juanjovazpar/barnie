/**
 * Ping Component
 *
 * The Ping component displays a visual indicator that can be animated with a "ping" effect.
 * It optionally displays a label and can wrap around other components or elements.
 *
 * Props:
 *
 * - `animated` (boolean, optional): Determines whether the ping animation is applied. Default is `false`.
 * - `label` (string, optional): Text label to be displayed alongside the ping indicator.
 * - `className` (string, optional): Additional CSS classes to apply to the ping element.
 * - `children` (React.ReactNode, optional): Any child elements to be rendered inside the component.
 *
 * Usage:
 *
 * ```jsx
 * <Ping animated label="Loading...">
 *   <SomeChildComponent />
 * </Ping>
 * ```
 */

const ANIMATION_CLASS = 'animate-ping';

export interface IPingProps {
  animated?: boolean;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Ping = ({ animated, label, className, children }: IPingProps) =>
  children && (
    <div className="ping-wrapper">
      {children}
      <span className={`ping ${className} ${label ? '--with-label' : ''}`}>
        <span className={`ping-pulse ${animated && ANIMATION_CLASS} `}></span>
        <span className="ping-indicator">{label}</span>
      </span>
    </div>
  );
