const ANIMATION_CLASS = 'animate-ping';

export const Ping = ({ animated, label, className, children }) =>
  children && (
    <div className="ping-wrapper">
      {children}
      <span className={`ping ${className} ${label ? '--with-label' : ''}`}>
        <span className={`ping-pulse ${animated && ANIMATION_CLASS} `}></span>
        <span className="ping-indicator">{label}</span>
      </span>
    </div>
  );
