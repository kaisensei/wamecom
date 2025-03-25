import { ReactElement } from 'react';
import { ZeroFuncType } from 'src/util';

interface AlertWrapProps {
  count: number;
  content: ReactElement;
  onClick: ZeroFuncType;
}

function AlertWrap({
  count,
  content,
  onClick,
}:AlertWrapProps) {
  return (
    <div onClick={onClick} className="relative">
      {content}
      {count > 0 && (
      <div className="absolute -top-1 right-0 w-5 y-2 border-2 border-white bg-red-500 text-center text-xs rounded-lg text-white">
        {count}
      </div>
      )}
    </div>
  );
}

export default AlertWrap;
