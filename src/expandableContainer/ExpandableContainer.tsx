import { ReactNode, useState } from 'react';
import { twcn } from 'src/util';
import Column from '../Column';
import ExpandableContainerHeader from './ExpandableContainerHeader';

export interface ExpandableContainerProps {
  title: string;
  children?: ReactNode;
  isExpandable?: boolean;
  className?: string;
}

function ExpandableContainer({
  title,
  isExpandable = true,
  className = '',
  children = undefined,
}:ExpandableContainerProps) {
  const [isShown, setIsShown] = useState(true);
  const onClick = () => setIsShown((prev) => !prev);

  return (
    <Column className={twcn('gap-0 bg-white rounded-lg px-2', className)}>
      <ExpandableContainerHeader
        isExpandable={isExpandable}
        isShown={isShown}
        title={title}
        onClick={onClick}
      />
      {isShown && <div className="border-t border-dashed">{children}</div>}
    </Column>
  );
}

export default ExpandableContainer;
