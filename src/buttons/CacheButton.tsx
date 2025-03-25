import { useEffect, useState } from 'react';
import { Button } from 'src/components/util';
import { ZeroFuncType } from 'src/util';

export interface CacheButtonProps {
  id: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (cancelLoading: ZeroFuncType)=>void;
  label: string;
  isHighlighted: boolean;
}

const cache:{[key:string]:boolean} = {};

function CacheButton({
  id,
  onClick,
  label,
  isHighlighted,
}:CacheButtonProps) {
  const [isLoading, setIsLoading] = useState(cache[id]);

  useEffect(() => {
    if (id in cache) setIsLoading(cache[id]);
    else cache[id] = false;
  }, [id]);

  const toggleIsLoading = (v:boolean) => {
    cache[id] = v;
    setIsLoading(v);
  };

  const handleClick = () => {
    toggleIsLoading(true);
    onClick(() => toggleIsLoading(false));
  };
  return (
    <Button
      className={`w-fit h-fit ${isHighlighted ? 'bg-blue-500 border-0' : 'bg-white border-blue-500'}`}
      labelClassName={`${isHighlighted ? 'text-white text-sm' : 'text-blue-500 text-sm'}`}
      isLoading={isLoading}
      label={label}
      onClick={handleClick}
    />
  );
}

export default CacheButton;
