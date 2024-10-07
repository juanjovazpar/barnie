export const Progressbar = ({
  progress,
  className,
  showValue,
  rounded,
  size,
  label,
}) => (
  <>
    {label && <label>{label}</label>}
    <div
      className={
        showValue === 'left'
          ? 'flex items-center gap-x-3 whitespace-nowrap'
          : ''
      }
    >
      {showValue === 'top' && (
        <div
          className={`progressbar-floating-tag inline-block mb-2`}
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
          <span className="text-sm text-gray-800 dark:text-white">{`${progress}%`}</span>
        </div>
      )}
    </div>
  </>
);
