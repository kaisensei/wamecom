import { twcn } from 'src/util';
import LoadingIcon from './loading.gif';
import Img from '../Img';

interface LoadingIndicatorProps {
  className?: string;
}

function LoadingIndicator({
  className = '',
}:LoadingIndicatorProps) {
  return (
    <Img
      src={LoadingIcon}
      alt="loading"
      className={twcn('LoadingIndicator w-5', className)}
    />
  );
}

export default LoadingIndicator;
