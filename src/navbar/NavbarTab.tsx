import { twcn } from "src/util";

interface NavbarTabProps {
  isHighlighted: boolean;
  tabName: number;
  onClick: (name: number) => void;
  label: string;
  className: string;
  tabHighlightedClassName?: string;
}

function NavbarTab({
  tabName,
  isHighlighted,
  onClick,
  label,
  className,
  tabHighlightedClassName
}: NavbarTabProps) {
  return (
    <div
      className={twcn('px-3 py-0.5 text-gray-666 text-center', className, isHighlighted && (tabHighlightedClassName || 'border-blue-500 border-b-2 text-blue-500'))}
      onClick={() => onClick(tabName)}
    >
      {label}
    </div>
  );
}

export default NavbarTab;