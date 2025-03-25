import { twcn, ZeroFunc, ZeroFuncType } from 'src/util';
import { LoadingIndicator, Row } from 'src/components/util';

interface SubmitButtonProps {
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  formID?: string;
  label: string;
  onClick?: ZeroFuncType;
}

function SubmitButton({
  label,
  className = '',
  isLoading = false,
  disabled = false,
  formID = undefined,
  onClick = ZeroFunc,
}:SubmitButtonProps) {
  let optional = {};
  // formID is used in case submit button is outside form tag
  if (formID) optional = { form: formID };
  return (
    <button
      type="submit"
      className={twcn('SubmitButton px-1 border rounded-lg w-full px-2 bg-blue-500 text-white', className)}
      disabled={disabled}
      onClick={onClick}
      {...optional}
    >
      <Row>
        <div className="w-full text-sm">{label}</div>
        {isLoading && <LoadingIndicator />}
      </Row>
    </button>
  );
}

export default SubmitButton;
