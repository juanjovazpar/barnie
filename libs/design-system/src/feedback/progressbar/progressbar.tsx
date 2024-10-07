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
