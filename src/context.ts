import { createContext, useContext } from 'react';
import { Units } from '../types';

export enum Breakpoint {
  Small = 320,
  Medium = 720,
  Large = 1024,
};

const BreakpointContext = createContext(Breakpoint.Small);
export const BreakpointProvider = BreakpointContext.Provider;
export const useBreakpoint = () => useContext(BreakpointContext);
