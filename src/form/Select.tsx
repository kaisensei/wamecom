import { ReactNode } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { twcn } from 'src/util';

export interface SelectOptionProps<T> {
  value: T;
  label: ReactNode;
}

interface SelectProps<T> {
  name: string;
  register: UseFormRegister<FieldValues>;
  options: SelectOptionProps<T>[];
  defaultValue: T;
  className?: string;
  optionClassName?: string;
}
function Select<T extends string | number | readonly string[] | undefined>({
  name,
  register,
  options,
  defaultValue,
  className = '',
  optionClassName = '',
}:SelectProps<T>) {
  return (
    <div className="custom-select">
      <select
        {...register(name, { value: defaultValue })}
        className={twcn('bg-white py-0 px-1 w-full rounded-md text-gray-666 border-gray-300', className)}
      >
        {options.map((option:SelectOptionProps<T>) => {
          const { value, label } = option;
          return (
            <option
              className={optionClassName}
              value={value}
            >
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
