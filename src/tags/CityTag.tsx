import SvgTag from 'src/components/util/SvgTag';
import { CitySvg } from 'src/components/svgs';

interface CityTagProps {
  label: string;
  className: string;
}

function CityTag({ label, className }: CityTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CitySvg }}
      isVertical={false}
      className={className}
    />
  );
}

export default CityTag;
