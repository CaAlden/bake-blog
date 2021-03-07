import * as React from 'react';
import { css } from '@emotion/css';
import Header from './Header';
import { Colors } from '../utils/Colors';
import { Breakpoint, breakpointCases, useBreakpoint } from '../context';
import { getFullHref, MetaData, setHeadTags } from '../utils/header';
import { useRouteMatch } from 'react-router-dom';

interface IProps {
  meta?: Partial<Omit<MetaData, 'title' | 'site_name'>>;
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

export const DEFAULT_META: Partial<MetaData> = {
  title: 'The Bake Lab',
  description: 'Recipes and Blog posts about baking driven by scientific research and experimentation',
  type: 'website',
  card: 'summary',
  creator: '@souperman527',
};
const PageLayout: React.FC<IProps> = ({
  title,
  hero,
  children,
  meta = DEFAULT_META,
}) => {
  const path = useRouteMatch();
  React.useEffect(() => {
    setHeadTags({ url: getFullHref(path.url), ...meta, title, site_name: 'The Bake Lab' });
  }, [title, meta]);
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
