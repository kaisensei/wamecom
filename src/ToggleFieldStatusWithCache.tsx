import { useEffect, useState } from 'react';
import { BoolFuncType } from 'src/util';
import { ToggleButton } from './buttons';

interface ToggleFieldStatusWithCacheProps {
  id: string;
  status: boolean;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onToggle: (status: boolean, callback: BoolFuncType) => void;
}

const cache: { [key: string]: boolean; } = {};

function ToggleFieldStatusWithCache({
  id,
  status: statusInit,
  label,
  onToggle,
}: ToggleFieldStatusWithCacheProps) {
  const [status, setStatus] = useState(statusInit);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id in cache) setIsLoading(cache[id]);
    else cache[id] = false;
  }, [id]);
  useEffect(() => {
    setStatus(statusInit);
  }, [statusInit]);

  const callback = (isLoading: boolean) => {
    cache[id] = isLoading;
    setIsLoading(isLoading);
  };

  const handleToggle = (status: boolean) => {
    onToggle(status, callback);
  };

  return (
    <ToggleButton
      label={label}
      checked={status ?? false}
      onChange={handleToggle}
      disabled={isLoading}
    />
  );
}

export default ToggleFieldStatusWithCache;
