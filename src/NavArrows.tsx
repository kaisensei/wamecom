import { useState } from 'react';
import {
  twConcat,
  twcn,
  ZeroFuncType,
  useOutsideClick
} from 'src/util';
import { LeftArrowSvg, RightArrowSvg } from 'src/components/svgs';
import { Row } from '.';

interface NavArrowsProps {
  handlePrev: ZeroFuncType;
  handleNext: ZeroFuncType;
}

enum Arrow {
  Prev = -1,
  None = 0,
  Next = 1,
}

const getArrowStype = (v: number) => {
  const commonStyle = 'flex items-center justify-center rounded-full h-6 w-6 mx-1 my-0.5 border-0 p-1.5';
  if (v === 0) return commonStyle;
  return v === 1 ? twConcat(commonStyle, 'bg-gray-300') : twConcat(commonStyle, 'hover:bg-gray-200');
};


function NavArrows({ handleNext, handlePrev }: NavArrowsProps) {
  const [clickedArrow, setClickedArrow] = useState(Arrow.None);

  const onClickPrev = () => {
    setClickedArrow(Arrow.Prev);
    handlePrev();
  };

  const onClickNext = () => {
    setClickedArrow(Arrow.Next);
    handleNext();
  };

  const ref = useOutsideClick(() => { setClickedArrow(Arrow.None); });

  return (
    <div ref={ref}>
      <Row className="NavArrows gap-0" >
        <div
          className={twcn(getArrowStype(clickedArrow * Arrow.Prev), 'mx-2 rounded-full text-center pl-2 pr-1 py-0')}
          onClick={onClickPrev}
        >
          <LeftArrowSvg className="fill-gray-666" />
        </div>
        <div
          className={getArrowStype(clickedArrow * Arrow.Next)}
          onClick={onClickNext}
        >
          <RightArrowSvg className="fill-gray-666" />
        </div>
      </Row>
    </div>
  );
}

export default NavArrows;
