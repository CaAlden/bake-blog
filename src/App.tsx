import * as React from 'react';
import {
  useRouteMatch,
  Switch,
  Link,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import ListLayout from './layout/ListLayout';
import PageLayout from './layout/PageLayout';
import { PostDataHeader } from '../types';
import FirstPost from './posts/first-post';
import { header as firstPostHeader } from './posts/first-post/header-data';
import { Breakpoint, BreakpointProvider } from './context';

type Routes = Array<[PostDataHeader, React.ComponentType]>;
const RECIPES: Routes = [
];

const POSTS: Routes = [
  [firstPostHeader, FirstPost],
];

const Directory: React.FC<{routes: Routes; title: string }> = ({ routes, title, children }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      {routes.map(([header, Component]) =>
        <Route path={`${match.path}/${header.slug}`} key={header.slug}>
          <Component />
        </Route>
      )}
      <Route exact path={match.path}>
        <PageLayout title={title}>
          {routes.length === 0 ? (
            <span>No Results</span>
          ) : (
            <ListLayout>
              {routes.map(([header]) =>
                <Link key={header.slug} to={`${match.path}/${header.slug}`}>
                  {header.title}
                </Link>
              )}
            </ListLayout>
          )}
        </PageLayout>
      </Route>
      <Route path="*">
        404
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <BreakpointProvider value={Breakpoint.Large}>
      <Router>
        <Switch>
          <Route path="/recipes">
            <Directory routes={RECIPES} title="Recipes" />
          </Route>
          <Route path="/posts">
            <Directory routes={POSTS} title="Posts" />
          </Route>
          <Route exact path="/">
            TODO: Homepage
          </Route>
          <Route path="*">
            TODO: 404
          </Route>
        </Switch>
      </Router>
    </BreakpointProvider>
  );
}
