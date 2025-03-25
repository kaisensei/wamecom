import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';
import { twcn } from 'src/util';

interface InputProps {
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  id?: string;
  className?: string;
  defaultValue?: string;
  row?:number;
  disabled?: boolean;
}

function Textarea({
  name,
  placeholder,
  register,
  errors,
  id = '',
  defaultValue = '',
  className = '',
  row = 3,
  disabled = false,
}:InputProps) {
  return (
    <>
      <textarea
        disabled={disabled}
        id={id}
        className={twcn('Textarea rounded w-full px-1 py-0 h-fit border-gray-300 text-gray-666', className)}
        placeholder={placeholder}
        rows={row}
        {...register(name, { value: defaultValue })}
      />
      <p className="pl-3 text-red-600">{errors[name]?.message as string}</p>
    </>
  );
}

export default Textarea;
