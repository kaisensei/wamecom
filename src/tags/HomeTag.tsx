import SvgTag from 'src/components/util/SvgTag';
import { HomeSvg } from 'src/components/svgs';
import { ZeroFuncType } from 'src/util';

interface HomeTagProps {
  isHighlighted: boolean;
  onClick: ZeroFuncType;
  label: string;
}

function HomeTag({
  isHighlighted,
  onClick,
  label,
}: HomeTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: HomeSvg }}
      onClick={onClick}
      isVertical
      isHighlighted={isHighlighted}
    />
  );
}

export default HomeTag;
