import * as React from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import { Units } from '../types';

export enum Breakpoint {
  Small = 320,
  Medium = 720,
  Large = 1024,
};

const breakpoints = [Breakpoint.Large, Breakpoint.Medium, Breakpoint.Small];

const useObservedBreakpoint = (ref: React.RefObject<HTMLElement | null>) => {
  const [size, setSize] = React.useState(0);
  useResizeObserver(ref, (entry) => {
    setSize(entry.contentRect.width);
  });
  return React.useMemo(() => breakpoints.find(b => size >= b) ?? Breakpoint.Small, [size]);
};
const BreakpointContext = React.createContext(Breakpoint.Small);
export const BreakpointProvider = ({ children }) => {
  const wrapper = React.useRef(null);
  const breakpoint = useObservedBreakpoint(wrapper);
  return (
    <div id="breakpoint" ref={wrapper}>
      <BreakpointContext.Provider value={breakpoint}>
        {children}
      </BreakpointContext.Provider>
    </div>
  );
};
export const useBreakpoint = () => React.useContext(BreakpointContext);
