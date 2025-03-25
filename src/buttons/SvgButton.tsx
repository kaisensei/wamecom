import { twConcat, twcn } from 'src/util';
import { ElementType } from 'react';
import { SvgSize } from 'src/components/svgs';
import Container from '../Container';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';

export interface IconProps {
  Svg: ElementType;
  className?: string;
  size?: SvgSize;
}

interface SvgButtonProps {
  icon: IconProps;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: any | null) => void;
  isLoading?: boolean;
  disabled?: boolean;
  isVertical?: boolean;
  isHighlighted?: boolean;
  label?: string;
  className?: string;
  labelClassName?: string;
}

const getClassName = (isHighlighted: boolean, disabled: boolean, className?: string) => {
  let ret = 'flex flex-row items-center justify-center rounded-lg w-full bg-white py-1';
  if (isHighlighted) ret = twConcat(ret, 'bg-blue-200 border-0');
  if (disabled) ret = twConcat(ret, 'bg-gray-200');
  return twcn(ret, className);
};

const getLabelClassName = (isHighlighted: boolean, disabled: boolean, className?: string) => {
  let ret = 'text-gray-666';
  if (isHighlighted) ret = twConcat(ret, 'text-blue-500');
  if (disabled) ret = twConcat(ret, 'text-gray-888');
  return twcn(ret, className);
};

function SvgButton({
  icon,
  onClick,
  className = '',
  disabled = false,
  isLoading = false,
  isVertical = false,
  isHighlighted = false,
  labelClassName = '',
  label = '',
}: SvgButtonProps) {
  const {
    Svg,
    size: svgSize,
    className: svgClassName,
  } = icon;

  return (
    <button
      disabled={disabled || isLoading}
      className={getClassName(isHighlighted!, disabled!, className)}
      type="button"
      onClick={onClick}
    >
      <Container isVertical={isVertical} className="items-center gap-0">
        {Svg && <Svg size={svgSize} className={twcn(`${isHighlighted ? 'fill-blue-500' : 'fill-gray-666'}`, svgClassName)} />}
        <div className={getLabelClassName(isHighlighted!, disabled!, labelClassName)}>{label}</div>
      </Container>
      {isLoading && <LoadingIndicator />}
    </button>
  );
}

export default SvgButton;
