import * as React from 'react';
import { css } from '@emotion/css';
import { Breakpoint, useBreakpoint } from '../context';

const ListLayout: React.FC = ({
  children,
}) => {
  const breakpoint = useBreakpoint();
  const container = css({
    display: 'grid',
    gridTemplateColumns: `repeat(${
      breakpoint === Breakpoint.Large ? 5 :
        breakpoint  ===  Breakpoint.Medium ? 3 : 1
    }, 1fr)`,
    gridAutoRows: '1fr',
  });
  const child = css({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  });
  return (
    <div className={container}>{
      React.Children.map(children, (node, idx) => <div className={child} key={idx}>{node}</div>)
    }</div>
  );
}

export default ListLayout;
