import { Row } from 'src/components/util';
import { AddSvg, SvgSize, CollapseSvg } from 'src/components/svgs';
import { ZeroFuncType } from 'src/util';

interface ExpandableContainerHeaderProps {
  isShown: boolean;
  onClick: ZeroFuncType;
  title: string;
  isExpandable?: boolean;
}
function ExpandableContainerHeader({
  isShown,
  onClick,
  title,
  isExpandable = true,
}: ExpandableContainerHeaderProps) {
  return (
    <Row className="text-blue-500 justify-between py-0.5">
      <h1>{title}</h1>
      {isExpandable && (
        <div onClick={onClick}>
          {isShown ? (
            <CollapseSvg
              size={SvgSize.sm}
              className="fill-gray-888"
            />
          ) : (
            <AddSvg
              size={SvgSize.sm}
              className="fill-gray-888"
            />
          )}
        </div>
      )}

    </Row>
  );
}

export default ExpandableContainerHeader;
