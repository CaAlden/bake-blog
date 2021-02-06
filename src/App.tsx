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
import { NamedLink, PostDataHeader } from '../types';
import FirstPost from './posts/first-post';
import Homepage from './Homepage';
import { header as firstPostHeader } from './posts/first-post/header-data';
import { Breakpoint, BreakpointProvider } from './context';

type Routes = Array<[NamedLink, React.ComponentType]>;
const RECIPES: Routes = [
];

const POSTS: Routes = [
  [firstPostHeader.articleLink, FirstPost],
];

const Directory: React.FC<{routes: Routes; title: string }> = ({ routes, title, children }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      {routes.map(([link, Component]) =>
        <Route path={link.url} key={link.url}>
          <Component />
        </Route>
      )}
      <Route exact path={match.path}>
        <PageLayout title={title}>
          {routes.length === 0 ? (
            <span>No Results</span>
          ) : (
            <ListLayout>
              {routes.map(([link]) =>
                <Link key={link.url} to={link.url}>
                  {link.name}
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
            <Homepage posts={[firstPostHeader]} />
          </Route>
          <Route path="*">
            TODO: 404
          </Route>
        </Switch>
      </Router>
    </BreakpointProvider>
  );
}
