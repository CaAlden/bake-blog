import * as React from 'react';
import { css } from '@emotion/css';
import { Image } from '../../types';

interface IProps {
  image: Image;
  text?: string;
}

const getHeroImageClass = (image: Image) => css({
  backgroundImage: `url(${image.large ?? image.large})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover', /* Resize the background image to cover the entire container */

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '400px',
  height: '60vh',
  color: '#fff',
});

const textClass = css({
  fontSize: 'calc(3rem + 2vw)',
  textAlign: 'center',
  mixBlendMode: 'difference',
  margin: 0,
});
export default function HeroImage(props: IProps) {
  return (
    <div className={getHeroImageClass(props.image)}>
    {props.text &&
      <h1 className={textClass}>{props.text}</h1>
    }</div>
  );
}
