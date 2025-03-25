import { ZeroFunc, ZeroFuncType } from 'src/util';
import { Column, Row } from '.';

interface ContainerProps {
  children: any;
  className?: string;
  isVertical?: boolean;
  onClick?: ZeroFuncType;
}

function Container({
  children,
  className = '',
  isVertical = false,
  onClick = ZeroFunc,
}:ContainerProps) {
  if (isVertical) {
    return (
      <Column
        className={className}
        onClick={onClick}
      >
        {children}
      </Column>
    );
  }
  return (
    <Row
      className={className}
      onClick={onClick}
    >
      {children}
    </Row>
  );
}

export default Container;
