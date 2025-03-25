import { ReactNode } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Row } from 'src/components/util';

interface CheckboxProps {
  label: ReactNode;
  className?: string;
  name: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}

function Checkbox({
  label,
  name,
  register,
  className = '',
  disabled = false,
}:CheckboxProps) {
  return (
    <Row className={className}>
      <input
        disabled={disabled}
        type="checkbox"
        {...register(name)}
        style={{ outline: 'none' }}
        className="rounded-sm border border-gray-300"
      />
      {label}
    </Row>
  );
}

export default Checkbox;
