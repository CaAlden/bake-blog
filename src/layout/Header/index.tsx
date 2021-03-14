import * as React from 'react';
import { css } from '@emotion/css';
import { Link, useRouteMatch } from 'react-router-dom';
import { Colors } from '../../utils/Colors';
import Navigation from './Navigation';
import UnitsSwitch from '../../UnitsSwitch';
import { Breakpoint, useBreakpoint } from '../../context';

const NavigationLinks = [
  { to: '/posts', label: 'Posts', color: Colors.Third },
  { to: '/recipes', label: 'Recipes', color: Colors.Secondary },
];

const getHeaderClass = (color: string) => css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'stretch',
  background: color,
  color: Colors.White,
  padding: '15px',
  position: 'sticky',
  zIndex: 100,
  boxShadow: '0px 1px 4px rgba(0,0,0,0.4)',
  top: 0,
});

const getTitleClass = (breakpoint: Breakpoint) => css({
  margin: 0,
  textAlign: breakpoint === Breakpoint.Small ? 'center' : undefined,
});

const headerLinkClass = css({
  cursor: 'pointer',
  flexGrow: 1,
  color: Colors.White,
  textDecoration: 'none',
  ':active': {
    color: Colors.Secondary,
  },
  ':visited': {
    color: Colors.White,
  },
});

const getUnitsContainerClass = (breakpoint: Breakpoint) => css({
  display: 'flex',
  flexGrow: breakpoint === Breakpoint.Small ? 1 : 0,
  justifyContent: 'center',
  paddingLeft: '25px',
  alignItems: 'center',
});

const Header = () => {
  const route = useRouteMatch();
  const breakpoint = useBreakpoint();
  const matchedColor = React.useMemo(() => {
    const match = route.path.startsWith('/posts') ? Colors.Third :
      route.path.startsWith('/recipes') ? Colors.Secondary :
      Colors.Primary;
    return match;
  }, [route.path]);

  return (
    <header className={getHeaderClass(matchedColor)}>
      <Link to="/" className={headerLinkClass}>
        <h1 className={getTitleClass(breakpoint)}>The Bake Lab</h1>
      </Link>
      <div style={{ display: 'flex', paddingLeft: '25px' }}>
        <Navigation items={NavigationLinks} />
      </div>
      <div className={getUnitsContainerClass(breakpoint)}>
        <UnitsSwitch />
      </div>
    </header>
  );
};

export default Header;
