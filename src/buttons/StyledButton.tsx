import { ZeroFuncType } from 'src/util';
import Button from './Button';

interface StyledButtonProps {
  isHighlighted?: boolean;
  isLoading?: boolean;
  onClick: ZeroFuncType;
  label: string;
}

// TODO: change StyledButton to PrimaryButton
// interface PrimaryButtonProps {
//   isHighlighted?: boolean;
//   isLoading?: boolean;
//   onClick: ZeroFuncType;
//   label: string;
// }

// interface LabelProps {
//   text: string;
//   className: string;
//   highlightedClassName: string;
// }

function StyledButton({
  isHighlighted = false,
  isLoading = false,
  onClick,
  label,
}: StyledButtonProps) {
  return (
    <Button
      className={`w-fit h-fit ${isHighlighted ? 'bg-blue-500 border-0' : 'bg-white border-blue-500'}`}
      labelClassName={`${isHighlighted ? 'text-white text-sm' : 'text-blue-500 text-sm'}`}
      isLoading={isLoading}
      label={label}
      onClick={onClick}
    />
  );
}

export default StyledButton;
