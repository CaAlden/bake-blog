import { css } from '@emotion/css';
import * as React from 'react';

interface IHeaderContext {
  value: Map<number, string>;
  setValue: (index: number, str: string) => void;
}
const headerRefContext = React.createContext<IHeaderContext>({ value: new Map(), setValue: () => {}})
const HeaderProvider = headerRefContext.Provider;

const tableCellIndexContext = React.createContext<number | undefined>(undefined);
const CellIndexProvider = tableCellIndexContext.Provider;

const useHeaderValue = () => {
  const i = React.useContext(tableCellIndexContext);
  const { value: map } = React.useContext(headerRefContext);
  return i !== undefined && map.get(i);
}

export const Table: React.FC = ({ children }) => {
  const [headerValues] = React.useState(new Map<number, string>());
  const setValue = (i: number, val: string) => {
    headerValues.set(i, val);
  };

  return (
    <HeaderProvider value={{ value: headerValues, setValue }}>
      <table className="table">
        {children}
      </table>
    </HeaderProvider>
  );
}

export const TableHeader: React.FC = ({ children }) => {
  const i = React.useContext(tableCellIndexContext);
  const { setValue } = React.useContext(headerRefContext);
  React.useEffect(() => {
    if (i !== undefined) {
      setValue(i, React.Children.map(children, (node) => String(node)).join(' '));
    }
  }, [children, i]);
  return (
    <th>{children}</th>
  );
};

export const TableRow: React.FC = ({ children }) => {
  return (
    <tr>{React.Children.map(children,
      (node, i) => (
        <CellIndexProvider value={i} key={i}>
          {node}
        </CellIndexProvider>
      )
    )}</tr>
  );
};

export const TableCell: React.FC = ({ children }) => {
  const val: string | undefined = useHeaderValue();
  return (
    <td>
      {val && <span>{val}</span>}
      {children}
    </td>
  );
}
