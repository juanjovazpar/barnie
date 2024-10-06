export const Card = ({
  title,
  description,
  image,
  actions,
  style,
  className,
  ...props
}) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        ...style,
      }}
      className={className}
      {...props}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <div style={{ padding: '16px' }}>
        {title && (
          <h2 style={{ fontSize: '1.5em', margin: '0 0 8px' }}>{title}</h2>
        )}
        {description && <p style={{ margin: '0 0 16px' }}>{description}</p>}
        {actions && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};
