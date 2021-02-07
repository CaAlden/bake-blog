import * as React from 'react';
import { css } from '@emotion/css';
import Header from './Header';
import { Colors } from '../utils/Colors';
import { Breakpoint, breakpointCases, useBreakpoint } from '../context';

interface IProps {
  title: string;
  hero?: React.ReactNode;
}

const getFillPageClassName = (hero?: React.ReactNode) => css({
  minWidth: '100vw',
  minHeight: '100vh',
  background: Colors.White,
  paddingBottom: '30px',
  ...(hero === undefined ? {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  } : {
    display: 'grid',
    gridTemplateRows: 'auto minmax(400px, 60vh) 1fr 10px',
    gridTemplateColumns: '1fr',
  }),
});

const breakpointPadding = breakpointCases({
  [Breakpoint.Small]: '0 5px',
  [Breakpoint.Medium]: '0 5%',
  [Breakpoint.Large]: '0 10%',
});
const getContentClassName = (breakpoint: Breakpoint) => css({
  diplay: 'flex',
  flexGrow: 1,
  padding: breakpointPadding(breakpoint),
});

const PageLayout: React.FC<IProps> = ({
  title,
  hero,
  children,
}) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  const breakpoint = useBreakpoint();

  return (
    <div className={getFillPageClassName(hero)}>
      <Header />
      {hero}
      <div className={getContentClassName(breakpoint)}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
