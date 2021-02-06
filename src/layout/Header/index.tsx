import * as React from 'react';
import { css } from '@emotion/css';
import { Link, useRouteMatch } from 'react-router-dom';
import { Colors } from '../../utils/Colors';
import Navigation from './Navigation';

const NavigationLinks = [
  { to: '/posts', label: 'Posts', color: Colors.Third },
  { to: '/recipes', label: 'Recipes', color: Colors.Secondary },
];

const getHeaderClass = (color: string) => css({
  display: 'flex',
  justifyContent: 'space-between',
  background: color,
  color: Colors.White,
  padding: '15px',
});

const titleClass = css({
  margin: 0,
});

const headerLinkClass = css({
  color: Colors.White,
  textDecoration: 'none',
  ':active': {
    color: Colors.Secondary,
  },
  ':visited': {
    color: Colors.White,
  },
});

const Header = () => {
  const route = useRouteMatch();
  const matchedColor = React.useMemo(() => {
    const match = route.path.startsWith('/posts') ? Colors.Third :
      route.path.startsWith('/recipes') ? Colors.Secondary :
      Colors.Primary;
    return match;
  }, [route.path]);

  return (
    <header className={getHeaderClass(matchedColor)}>
      <Link to="/" className={headerLinkClass}>
        <h1 className={titleClass}>Bake Blog</h1>
      </Link>
      <Navigation items={NavigationLinks} />
    </header>
  );
};

export default Header;
