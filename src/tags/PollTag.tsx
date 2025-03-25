import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { PollSvg, SvgSize } from 'src/components/svgs';

interface PollTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function PollTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: PollTagProps) {

  return (
    <SvgTag
      label={label || 'Polls'}
      icon={{
        Svg: PollSvg,
        size: svgSize,
        className: isHighlighted ? 'stroke-blue-500 fill-none' : 'stroke-gray-666 fill-none',
      }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default PollTag;
