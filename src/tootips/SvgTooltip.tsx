import { ElementType } from 'react';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { SvgSize } from 'src/components/svgs';
import Tooltip from './Tooltip';

interface IconProps {
  Svg: ElementType;
  size?: SvgSize;
  className?: string;
}
export interface SvgTooltipProps {
  className?: string;
  onClick?: ZeroFuncType;
  icon: IconProps;
  label: string;
}

function SvgTooltip({
  className = '',
  onClick = ZeroFunc,
  icon,
  label,
}: SvgTooltipProps) {
  const { Svg, size, className: svgClassName } = icon;
  return (
    <Tooltip
      onClick={onClick}
      className={className}
      label={label}
      name={label}
    >
      <Svg size={size} className={svgClassName} />
    </Tooltip>
  );
}

export default SvgTooltip;
