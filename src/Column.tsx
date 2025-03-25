import { ZeroFunc, ZeroFuncType, twcn } from 'src/util';

interface ColumnProps {
  children: any;
  className?: string;
  onClick?:ZeroFuncType;
}

function Column({
  children,
  className = '',
  onClick = ZeroFunc,
}:ColumnProps) {
  return (
    <div
      className={twcn('flex flex-col gap-2', className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Column;
