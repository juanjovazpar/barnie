/**
 * Skeleton component that provides a placeholder UI while content is loading.
 */

export const Skeleton = () => (
  <div role="status" className="skeleton">
    <div className="skeleton-bar skeleton-bar--big w-48"></div>
    <div className="skeleton-bar max-w-[360px]"></div>
    <div className="skeleton-bar"></div>
    <div className="skeleton-bar max-w-[330px]"></div>
    <div className="skeleton-bar max-w-[300px]"></div>
    <div className="skeleton-bar max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
  </div>
);
