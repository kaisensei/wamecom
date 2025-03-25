import { ReactNode } from 'react';

interface ListProps {
  items: any[]
  // eslint-disable-next-line no-unused-vars
  itemRenderer: (...args:any[]) => ReactNode;
  className?: string;
  fallback?: ReactNode;
}

function List({
  items,
  itemRenderer,
  className = '',
  fallback = null,
}:ListProps) {
  if (!items || items.length === 0) return fallback;
  return <ul className={className}>{items.map(itemRenderer)}</ul>;
}

export default List;
