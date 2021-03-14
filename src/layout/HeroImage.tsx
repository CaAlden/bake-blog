import * as React from 'react';
import { css } from '@emotion/css';
import { Image } from '../../types';
import { Breakpoint, useBreakpoint } from '../context';

interface IProps {
  image: Image;
  text?: string;
}

const heroImageClass = css({
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  '-moz-background-size': 'cover',
  '-webkit-background-size': 'cover',
  '-o-background-size': 'cover',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '400px',
  height: '60vh',
  color: '#fff',
});

const textClass = css({
  fontSize: 'calc(5rem + 2vw)',
  textAlign: 'center',
  margin: 0,
});
export default function HeroImage(props: IProps) {
  const breakpoint = useBreakpoint();
  return (
    <div className={heroImageClass} style={{
      backgroundImage: `url(${props.image.large})`,
      backgroundAttachment:  breakpoint !== Breakpoint.Large ? 'scroll' : undefined,
    }}>
    {props.text &&
      <h1 className={textClass}>{props.text}</h1>
    }</div>
  );
}
