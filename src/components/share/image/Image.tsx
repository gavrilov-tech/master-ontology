import React from 'react';

interface ImageProps {
  src?: string;
  alt?: string;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

type Props = ImageProps & React.ImgHTMLAttributes<HTMLImageElement>

const Image: React.FC<Props> = ({ src, alt  = '', onLoad, onError, ...rest }) => {
  return (
    <img src={src} alt={alt} onLoad={onLoad} onError={onError} {...rest} />
  );
}

export default React.memo(Image);
