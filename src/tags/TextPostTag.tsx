import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { TextPostSvg, SvgSize } from 'src/components/svgs';

interface TextPostTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  label?: string;
}

function TextPostTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  label = '',
}: TextPostTagProps) {
  return (
    <SvgTag
      label={label || 'Text'}
      icon={{ Svg: TextPostSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default TextPostTag;
