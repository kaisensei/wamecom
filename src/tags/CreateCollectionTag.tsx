import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { CreateCollectionSvg, SvgSize } from 'src/components/svgs';

interface CreateCollectionTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreateCollectionTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreateCollectionTagProps) {
  return (
    <SvgTag
      label={label || 'Collection'}
      icon={{ Svg: CreateCollectionSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical
    />
  );
}

export default CreateCollectionTag;
