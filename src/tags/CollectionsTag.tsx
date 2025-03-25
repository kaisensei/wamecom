import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { SvgSize, CollectionsSvg } from 'src/components/svgs';

interface CollectionsTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
}

function CollectionsTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  labelClassName = '',
  svgClassName = '',
  svgSize = SvgSize.md,
}: CollectionsTagProps) {

  return (
    <SvgTag
      label={label}
      icon={{
        Svg: CollectionsSvg,
        size: svgSize,
        className: svgClassName,
      }}
      onClick={onClick}
      className={className}
      labelClassName={labelClassName}
      isHighlighted={isHighlighted}
    />
  );
}

export default CollectionsTag;
