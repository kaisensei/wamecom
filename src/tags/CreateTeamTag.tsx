import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { CreateTeamSvg, SvgSize } from 'src/components/svgs';

interface CreateTeamTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreateTeamTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreateTeamTagProps) {
  return (
    <SvgTag
      label={label || 'Team'}
      icon={{ Svg: CreateTeamSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical={false}
    />
  );
}

export default CreateTeamTag;
