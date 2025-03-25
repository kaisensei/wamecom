import { MapSvg } from 'src/components/svgs';
import { SvgTag } from 'src/components/util';

interface MapTagProps {
  isHighlighted?: boolean;
  onClick: () => void;
}

function MapTag({
  isHighlighted = false,
  onClick,
}: MapTagProps) {
  return (
    <SvgTag
      label='Map'
      icon={{ Svg: MapSvg }}
      onClick={onClick}
      isVertical
      isHighlighted={isHighlighted}
    />
  );
}

export default MapTag;
