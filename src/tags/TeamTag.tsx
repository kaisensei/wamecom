import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { SvgSize, TeamSvg } from 'src/components/svgs';

interface TeamTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
}

function TeamTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  labelClassName = '',
  svgClassName = '',
}: TeamTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: TeamSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
    />
  );
}

export default TeamTag;
