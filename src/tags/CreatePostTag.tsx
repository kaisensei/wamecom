import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { CreatePostSvg, SvgSize } from 'src/components/svgs';

interface CreatePostTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreatePostTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreatePostTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CreatePostSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical
    />
  );
}

export default CreatePostTag;
