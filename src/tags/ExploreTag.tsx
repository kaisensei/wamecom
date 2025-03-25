import SvgTag from 'src/components/util/SvgTag';
import { ExploreSvg } from 'src/components/svgs';
import { ZeroFuncType } from 'src/util';

interface ExploreTagProps {
  isHighlighted: boolean;
  onClick: ZeroFuncType;
  label: string;
}

function ExploreTag({
  isHighlighted,
  onClick,
  label,
}: ExploreTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: ExploreSvg }}
      onClick={onClick}
      isHighlighted={isHighlighted}
      isVertical
    />
  );
}

export default ExploreTag;
