import SvgTag from 'src/components/util/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'src/util';
import { NewsfeedSvg } from 'src/components/svgs';

interface NewsfeedTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
}

function NewsfeedTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
}: NewsfeedTagProps) {
  return (
    <SvgTag
      label='Newsfeed'
      icon={{ Svg: NewsfeedSvg }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default NewsfeedTag;
