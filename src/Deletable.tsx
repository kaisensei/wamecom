import { ReactNode } from 'react';
import Row from './Row';
import CloseIcon from './CloseIcon';

interface DeletableProps {
  content: ReactNode;
  onDelete: () => void;
  className?: string;
}

function Deletable({
  content,
  onDelete,
  className = '',
}: DeletableProps) {
  return (
    <Row className={className}>
      <CloseIcon onClick={onDelete} />
      {content}
    </Row>
  );
}

export default Deletable;
