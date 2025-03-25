import SvgTag from 'src/components/util/SvgTag';
import { PrivateSvg } from 'src/components/svgs';

function PrivateTag() {
  return (
    <SvgTag
      icon={{
        Svg: PrivateSvg,
        className: 'fill-blue-500',
      }}
    />
  );
}

export default PrivateTag;
