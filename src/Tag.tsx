import { twcn } from 'src/util';

/* eslint-disable no-unused-vars */
interface TagProps {
  label: string;
  className?: string;
  labelSize?: TagLabelSize;
  color?: TagColor;
}

export enum TagColor {
  Red = 'text-red-600 border-red-600',
  Lime = 'text-lime-700 border-lime-700',
  Blue = 'text-blue-500 border-blue-500',
  Violet = 'text-violet-600 border-violet-600',
  Slate = 'text-slate-300 border-slate-300',
  Cyan = 'text-cyan-600 border-cyan-600',
  Yellow = 'text-yellow-700 border-yellow-700'
}

export enum TagLabelSize {
  Lg = 'text-lg',
  Sm = 'text-sm',
  Xs = 'text-xs',
  Base = 'text-base',
}

function Tag({
  label,
  className = '',
  labelSize = TagLabelSize.Base,
  color = TagColor.Blue,
}:TagProps) {
  return (
    <div className={twcn('w-fit h-fit px-1 rounded-full border', className, labelSize, color)}>
      {label}
    </div>
  );
}

export default Tag;
