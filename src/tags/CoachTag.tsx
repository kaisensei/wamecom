import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { CoachSvg, SvgSize } from 'src/components/svgs';

interface CoachTagProps {
  label: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  labelClassName?: string;
  svgSize?: SvgSize;
}

function CoachTag({
  label,
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  labelClassName = '',
}: CoachTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CoachSvg, size: svgSize, className: 'fill-blue-500' }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
    />
  );
}

export default CoachTag;
