import { twcn, ZeroFunc, ZeroFuncType } from 'src/util';
import { CloseSvg, SvgSize } from 'src/components/svgs';

interface CloseIconProps {
  onClick?: ZeroFuncType;
  className?: string;
  hidden?: boolean;
}

function CloseIcon({
  onClick = ZeroFunc,
  className = '',
  hidden = false,
}: CloseIconProps) {
  return (
    <div className={twcn(`w-5 hover:cursor-pointer ${hidden && 'hidden'}`, className)} onClick={onClick}>
      <CloseSvg size={SvgSize.sm} className={twcn('fill-gray-666', className)} />
    </div>
  );
}

export default CloseIcon;
