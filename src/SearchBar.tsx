/* eslint-disable no-unused-vars */
import { KeyboardEvent, useState } from 'react';
import { twcn } from 'src/util';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSubmit: (value: string) => void;
  isLoading: boolean;
}

function SearchBar({
  placeholder = '',
  className = '',
  onSubmit,
}: SearchBarProps) {
  const [value, setValue] = useState('');
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      onSubmit(value);
    }
  };

  return (
    <input
      type="text"
      className={twcn('SearchBar text-lg text-gray-666 w-full py-0.5 px-1', className)}
      value={value}
      placeholder={placeholder || 'Search...'}
      onKeyDown={handleKeyDown}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default SearchBar;
