import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { CalendarSvg, SvgSize } from 'src/components/svgs';

interface CalendarTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  isVertical?: boolean;
  labelClassName?: string;
  svgClassName?: string;
  label?: string;
  svgSize?: SvgSize;
}

function CalendarTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  isVertical = false,
  label = '',
  labelClassName = '',
  svgClassName = '',
  svgSize = SvgSize.md,
}: CalendarTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: CalendarSvg,
        size: svgSize,
        className: svgClassName,
      }}
      onClick={onClick}
      isHighlighted={isHighlighted}
      isVertical={isVertical}
      labelClassName={labelClassName}
    />
  );
}

export default CalendarTag;
