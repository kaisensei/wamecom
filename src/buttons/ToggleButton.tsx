import Switch from 'react-switch';
import { twcn } from 'src/util';
import Row from '../Row';
import { ReactElement } from 'react';

interface ToggleButtonProps {
  label: string | ReactElement;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (v: boolean) => void;
  className?: string;
  disabled?: boolean;
}

function ToggleButton({
  label,
  checked,
  onChange,
  className = '',
  disabled = false,
}: ToggleButtonProps) {
  return (
    <Row className={twcn('justify-between', className)}>
      <div className="text-gray-666">{label}</div>
      <Switch
        onColor="#3b82f6"
        offColor="#888888"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        height={20}
        width={40}
        handleDiameter={18}
      />
    </Row>
  );
}

export default ToggleButton;
