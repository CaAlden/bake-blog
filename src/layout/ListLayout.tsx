import * as React from 'react';
import { css } from '@emotion/css';
import { Breakpoint, useBreakpoint } from '../context';

const childClass = css({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

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
  return (
    <div className={container}>{
      React.Children.map(children, (node, idx) => <div className={childClass} key={idx}>{node}</div>)
    }</div>
  );
}

export default ListLayout;
