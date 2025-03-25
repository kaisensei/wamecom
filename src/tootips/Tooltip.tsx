/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ZeroFunc, ZeroFuncType, twcn } from 'src/util';

export enum TooltipPosition {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

interface TooltipProps {
  name: string;
  label: string;
  children: ReactNode;
  position?: TooltipPosition;
  onClick?: ZeroFuncType;
  className?: string;
  tooltipStyle?: object;
}

function Tooltip({
  children,
  name,
  label,
  position = TooltipPosition.top,
  onClick = ZeroFunc,
  className = '',
  tooltipStyle = { color: 'white', backgroundColor: '#2563EB', zIndex: 100 },
}: TooltipProps) {
  const id = `${name}${Math.random().toFixed(10).toString()}`;
  return (
    <div
      data-tooltip-id={id}
      data-tooltip-content={label}
      onClick={onClick}
      className={twcn('flex flex-row items-center justify-center', className)}
    >
      {children}
      <ReactTooltip id={id} style={tooltipStyle} place={position} />
    </div>
  );
}

export default Tooltip;
