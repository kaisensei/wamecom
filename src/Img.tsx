import React from 'react';
import { ZeroFunc, ZeroFuncType } from 'src/util';

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: ZeroFuncType;
  style?: Object;
  onLoad?: any;
}

const getImgSrc = (src:string) => {
  if (src && src.indexOf('https://') !== -1) return '';
  return src;
};

const Img = React.forwardRef(({
  src,
  alt,
  className = '',
  onClick = ZeroFunc,
  style = undefined,
  onLoad = undefined,
}:ImgProps, ref:any) => {
  const imgSrc = getImgSrc(src);
  return (
    <img
      ref={ref}
      src={imgSrc}
      alt={alt}
      style={style}
      className={className}
      onClick={onClick}
      onLoad={onLoad}
    />
  );
});

export default Img;
