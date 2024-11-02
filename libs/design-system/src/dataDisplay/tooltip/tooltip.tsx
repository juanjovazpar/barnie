import { useState } from 'react';

/**
 * Tooltip Component
 *
 * The Tooltip component is used to display additional information
 * when the user hovers over an element. It provides a simple way
 * to enhance the user experience by offering context-sensitive
 * help or information.
 *
 * @component
 *
 * @param {ReactNode} children - The element or component that will trigger the tooltip on hover.
 * @param {string} text - The text to display inside the tooltip.
 * @param {'top' | 'bottom' | 'left' | 'right'} [position='top'] - Position of the tooltip relative to the target element.
 * @param {React.CSSProperties} [style] - Additional styles for the tooltip.
 *
 * @example
 *   <Tooltip text="Click here for more information" position="top">
 *      <button style={{ padding: '10px 20px' }}>Button with Tooltip</button>
 *   </Tooltip>
 */

export type TTooltipPosition = 'top' | 'bottom' | 'left' | 'right';
interface ITooltipProps {
  children: React.ReactNode;
  text: string;
  position?: TTooltipPosition;
  style?: React.CSSProperties;
}

export const Tooltip = ({
  children,
  text,
  position = 'top',
  style,
  ...props
}: ITooltipProps) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const tooltipStyles = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    ...style,
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '5px',
        };
      case 'bottom':
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '5px',
        };
      case 'left':
        return {
          top: '50%',
          right: '100%',
          transform: 'translateY(-50%)',
          marginRight: '5px',
        };
      case 'right':
        return {
          top: '50%',
          left: '100%',
          transform: 'translateY(-50%)',
          marginLeft: '5px',
        };
      default:
        return {};
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      {visible && (
        <div style={{ ...tooltipStyles, ...getPositionStyles() }}>{text}</div>
      )}
    </div>
  );
};
