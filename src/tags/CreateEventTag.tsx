import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { CreateEventSvg, SvgSize } from 'src/components/svgs';

interface CreateEventTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreateEventTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreateEventTagProps) {

  return (
    <SvgTag
      label={label || 'Event'}
      icon={{ Svg: CreateEventSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical={false}
    />
  );
}

export default CreateEventTag;
