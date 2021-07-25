import * as React from 'react';
import { css } from '@emotion/css';
import { Link, useRouteMatch } from 'react-router-dom';
import { Colors } from '../../utils/Colors';
import Navigation from './Navigation';
import UnitsSwitch from '../../UnitsSwitch';
import { Breakpoint, useBreakpoint, useScrollPoint } from '../../context';

const NavigationLinks = [
  { to: '/posts', label: 'Posts', color: Colors.Third },
  { to: '/recipes', label: 'Recipes', color: Colors.Secondary },
];

const SCROLL_TRANSITION = 'font-size ease-in-out 250ms, padding ease-in-out 250ms';

const getHeaderClass = (color: string, pageScrolled: boolean, hasTransition: boolean) => css({
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: pageScrolled ? '0.9em' : '1em',
  justifyContent: 'stretch',
  background: color,
  color: Colors.White,
  padding: `${pageScrolled ? '5px' : '15px'} 15px`,
  ...(hasTransition ? {
    transition: SCROLL_TRANSITION,
  } : {}),
  position: 'sticky',
  zIndex: 100,
  boxShadow: '0px 1px 4px rgba(0,0,0,0.4)',
  top: 0,
});

const getTitleClass = (breakpoint: Breakpoint, pageScrolled: boolean) => css({
  ...(breakpoint === Breakpoint.Small ? {} : { transition: SCROLL_TRANSITION }),
  fontSize: pageScrolled ? '1.2em' : '2em',
  textDecoration: 'none',
  margin: 0,
  textAlign: breakpoint === Breakpoint.Small ? 'center' : 'left',
});

const getHeaderLinkClass = (breakpoint: Breakpoint) => css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: breakpoint === Breakpoint.Small ? 'center' : 'stretch',
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

const getUnitsContainerClass = (breakpoint: Breakpoint, pageScrolled: boolean) => css({
  display: 'flex',
  flexGrow: breakpoint === Breakpoint.Small ? 1 : 0,
  justifyContent: 'center',
  paddingLeft: pageScrolled ? '10px' : '25px',
  alignItems: 'center',
});

const Header = () => {
  const pageScroll = useScrollPoint(40, 100);
  const route = useRouteMatch();
  const breakpoint = useBreakpoint();
  const matchedColor = React.useMemo(() => {
    const match = route.path.startsWith('/posts') ? Colors.Third :
      route.path.startsWith('/recipes') ? Colors.Secondary :
      Colors.Primary;
    return match;
  }, [route.path]);

  return (
    <header className={getHeaderClass(matchedColor, pageScroll, breakpoint === Breakpoint.Small)}>
      <Link to="/" className={getHeaderLinkClass(breakpoint)}>
        <h2 className={getTitleClass(breakpoint, pageScroll)}>The Bake Lab</h2>
      </Link>
      <div style={{ display: 'flex', paddingLeft: pageScroll ? '10px' : '25px' }}>
        <Navigation items={NavigationLinks} />
      </div>
      <div className={getUnitsContainerClass(breakpoint, pageScroll)}>
        <UnitsSwitch />
      </div>
    </header>
  );
};

export default Header;
