/* eslint-disable no-unused-vars */
import { ReactElement } from 'react';
import ReactSelect from 'react-select';
import { twcn } from 'src/util';

export interface OptionProps {
  value: any;
  label: ReactElement;
}

export type onChangeType =
  (option: OptionProps) => void;

interface SelectProps {
  isSearchable?: boolean;
  defaultOption?: OptionProps;
  options: OptionProps[];
  onChange: onChangeType;
  className?: string;
  disabled?: boolean;
}

function Select({
  defaultOption,
  options,
  onChange,
  isSearchable = false,
  className = '',
  disabled = false,
}: SelectProps) {
  return (
    <div className={twcn('w-full', className)}>
      <ReactSelect
        isClearable={false}
        isSearchable={isSearchable}
        isMulti={false}
        defaultValue={defaultOption}
        options={options}
        onChange={onChange} // TODO: fix type
        isDisabled={disabled}
      />
    </div>
  );
}

export default Select;
