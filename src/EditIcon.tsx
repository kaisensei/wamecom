import { twcn, ZeroFunc, ZeroFuncType } from 'src/util';
import { EditSvg, SvgSize } from 'src/components/svgs';

interface EditIconProps {
  onClick?: ZeroFuncType;
  className?: string;
  hidden?: boolean;
}

function EditIcon({
  onClick = ZeroFunc,
  className = '',
  hidden = false,
}: EditIconProps) {
  return (
    <div
      className={twcn(`w-5 hover:cursor-pointer ${hidden && 'hidden'}`, className)}
      onClick={onClick}
    >
      <EditSvg
        size={SvgSize.sm}
        className={twcn('fill-gray-666', className)} />
    </div>
  );
}

export default EditIcon;
