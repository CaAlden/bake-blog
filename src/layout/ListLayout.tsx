import * as React from 'react';
import { css } from '@emotion/css';
import { Breakpoint, useBreakpoint } from '../context';
import { Colors } from '../utils/Colors';

const childClass = css({
  display: 'flex',
  padding: '15px 0',
  justifyContent: 'center',
  alignItems: 'center',
  background: Colors.White,
});
const container = css({
  display: 'flex',
  flexGrow: 1,
  gap: '30px',
  alignItems: 'center',
  justifyContent: 'center',
});

const ListLayout: React.FC = ({
  children,
}) => {
  const breakpoint = useBreakpoint();
  return (
    <div className={container}>{
      React.Children.map(children, (node, idx) => <div className={childClass} key={idx}>{node}</div>)
    }</div>
  );
}

export default ListLayout;
