import { twcn } from 'src/util';
import { useRef } from 'react';
import List from './List';

interface ClassNamesProps {
  tabs?: string;
  tab?: string;
  left?: string;
  mid?: string;
  right?: string;
  picked?: string;
}

interface TabProps {
  label: string;
  value: any;
}

interface TabsProps {
  tabs: TabProps[];
  classNames?: ClassNamesProps;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: any) => void;
  pickedTab: any;
}

function Tabs({
  tabs,
  classNames,
  onClick,
  pickedTab,
}: TabsProps) {
  const nTabs = useRef(tabs.length);

  const itemRenderer = ({ label, value }: TabProps, i: number) => {
    let className = 'w-16 h-fit  text-center py-0 px-2 border w-fit text-center';
    if (pickedTab === value) className = twcn(className, 'bg-blue-200 text-blue-500', classNames?.picked);
    if (classNames) {
      const {
        tab, left, mid, right,
      } = classNames;
      if (tab) className = twcn(className, tab);
      if (i === 0) {
        className = twcn(className, 'rounded-l-lg border-r-0');
        if (left) className = twcn(className, left);
      } else if (i === nTabs.current - 1) {
        className = twcn(className, 'rounded-r-lg');
        if (right) className = twcn(className, right);
      } else {
        className = twcn(className, 'border-r-0');
        if (mid) className = twcn(className, mid);
      }
    }
    return (
      <li key={value} className="w-full">
        <div className={className} onClick={() => onClick(value)}>
          {label}
        </div>
      </li>
    );
  };

  return (
    <List
      className={twcn('flex flex-row overflow-y-scroll w-fit', classNames?.tabs)}
      items={tabs}
      itemRenderer={itemRenderer}
    />
  );
}

export default Tabs;
