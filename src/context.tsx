import * as React from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { parse, stringify } from "query-string";
import { Units } from "../types";
import { useHistory } from "react-router-dom";

export enum Breakpoint {
  Small = 320,
  Medium = 720,
  Large = 1024,
}

const breakpoints = [Breakpoint.Large, Breakpoint.Medium, Breakpoint.Small];

const useObservedBreakpoint = (ref: React.RefObject<HTMLElement | null>) => {
  const [size, setSize] = React.useState(0);
  useResizeObserver(ref, (entry) => {
    setSize(entry.contentRect.width);
  });
  return React.useMemo(
    () => breakpoints.find((b) => size >= b) ?? Breakpoint.Small,
    [size]
  );
};
const BreakpointContext = React.createContext(Breakpoint.Small);
export const BreakpointProvider: React.FC = ({ children }) => {
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

type Query = Record<string, string | string[] | undefined>;
interface IQueryContext {
  query: Query;
  setQuery: (q: Query) => void;
}
const QueryContext = React.createContext<IQueryContext>({
  query: {},
  setQuery: (q) => {},
});

const useRawQuery = (): Query => {
  const history = useHistory();
  return React.useMemo(() => parse(history.location.search), [
    history.location.search,
  ]);
};
export const QueryProvider: React.FC = ({ children }) => {
  const query = useRawQuery();
  const history = useHistory();
  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery: (q) => {
          history.push({ search: stringify(q) });
        },
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = () => React.useContext(QueryContext);