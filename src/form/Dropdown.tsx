import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';
import { twcn } from 'src/util';

interface InputProps {
  name: string;
  placeholder: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  className?: string;
  defaultValue?: string;
}

function Input({
  name,
  options,
  register,
  errors,
  className,
  defaultValue = '',
  placeholder = '',
}:InputProps) {
  return (
    <>
      <input
        className={twcn('Input rounded-lg w-full', className)}
        type="text"
        placeholder={placeholder}
        list="options"
        {...register(name, { value: defaultValue })}
      />
      <datalist id="options">
        {options.map((option:string) => <option>{option}</option>)}
      </datalist>
      <p className="pl-3 text-red-600">{errors[name]?.message as string}</p>
    </>
  );
}

export default Input;
