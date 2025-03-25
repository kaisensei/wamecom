import { twcn } from "src/util";
import List from "../List";
import NavbarTab from "./NavbarTab";

interface NavbarProps {
  tabs: TabItemProps[],
  onClick: (name: number) => void;
  pickedTabName: number;
  className?: string;
  tabClassName?: string;
  tabHighlightedClassName?: string;
}

interface TabItemProps {
  name: number;
  label: string;
}

function Navbar({
  tabs,
  onClick,
  pickedTabName,
  className = '',
  tabClassName = '',
  tabHighlightedClassName = ''
}: NavbarProps) {
  const itemRenderer = ({ name, label }: TabItemProps) => {
    return (
      <NavbarTab
        key={name}
        tabName={name}
        isHighlighted={pickedTabName === name}
        onClick={onClick}
        label={label}
        className={tabClassName}
        tabHighlightedClassName={tabHighlightedClassName}
      />
    );
  };
  return (
    <List
      className={twcn('flex flex-row', className)}
      items={tabs}
      itemRenderer={itemRenderer}
    />
  );
}

export default Navbar;
