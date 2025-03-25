import { SvgTag } from 'src/components/util';
import { CreateSvg, SvgSize } from 'src/components/svgs';
import { ZeroFuncType } from 'src/util';

interface CreateTagProps {
  label: string;
  onClick: ZeroFuncType;
}

function CreateTag({ label, onClick }: CreateTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CreateSvg, size: SvgSize.md }}
      onClick={onClick}
      isVertical
    />
  );
}

export default CreateTag;
