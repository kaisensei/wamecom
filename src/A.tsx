import { ReactNode } from 'react';

/* eslint-disable no-unused-vars */
export enum ATarget {
  blank = '_blank',
  self = '_self'
}

interface AProps {
  target?: ATarget;
  href: string;
  children: ReactNode;
}

function A({
  target = ATarget.self,
  href,
  children,
}:AProps) {
  return (
    <a href={href} target={target}>{children}</a>
  );
}

export default A;
