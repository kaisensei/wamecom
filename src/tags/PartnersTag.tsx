import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { PartnersSvg } from 'src/components/svgs';

interface PartnersTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
}

function PartnersTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
}: PartnersTagProps) {
  return (
    <SvgTag
      label="Partners"
      icon={{ Svg: PartnersSvg }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default PartnersTag;
