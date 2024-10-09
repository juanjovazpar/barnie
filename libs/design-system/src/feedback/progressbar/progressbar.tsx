/**
 * Progressbar component to visually represent a percentage of progress.
 *
 * @param {number} progress - The current progress value represented as a percentage (0 to 100).
 * @param {string} [className] - Optional additional CSS classes to apply to the progress bar.
 * @param {TShowValue} [showValue] - Determines where to display the progress value.
 *                                   Options are 'top', 'left', 'right', or 'inside'.
 * @param {boolean} [rounded] - Optional flag to apply rounded corners to the progress bar.
 * @param {string} [size] - Optional size modifier for the progress bar.
 * @param {string} [label] - Optional label to display above the progress bar.
 */

export type TShowValue = 'top' | 'left' | 'right' | 'inside';

export interface IProgressbarProps {
  progress: number;
  className?: string;
  showValue?: TShowValue;
  rounded?: boolean;
  size?: string;
  label?: string;
}

export const Progressbar = ({
  progress,
  className,
  showValue,
  rounded,
  size,
  label,
}: IProgressbarProps) => (
  <>
    {label && <label>{label}</label>}
    <div
      className={
        showValue === 'left' || showValue === 'right'
          ? 'flex items-center gap-x-3 whitespace-nowrap'
          : ''
      }
    >
      {showValue === 'right' && (
        <div className="w-10 text-start">
          <span className="progressbar-side-tag">{`${progress}%`}</span>
        </div>
      )}
      {showValue === 'top' && (
        <div
          className={`progressbar-floating-tag`}
          style={{ marginLeft: `calc(${progress}% - 1.25rem)` }}
        >
          {`${progress}%`}
        </div>
      )}
      <div
        className={`progressbar ${className} ${size} ${rounded ? 'rounded' : ''}`}
        role="progressbar"
      >
        <div
          className="progressbar-indicator"
          style={{ width: `${progress}%` }}
        >
          <span className="progressbar-value">
            {showValue === 'inside' && `${progress}%`}
          </span>
        </div>
      </div>
      {showValue === 'left' && (
        <div className="w-10 text-end">
          <span className="progressbar-aside-tag">{`${progress}%`}</span>
        </div>
      )}
    </div>
  </>
);
