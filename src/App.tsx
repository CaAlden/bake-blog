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
import PostList from './PostList';
import RecipeList from './RecipeList';
import { header as firstPostHeader } from './posts/first-post/header-data';
import { Breakpoint, BreakpointProvider } from './context';
import { getRecipes } from './utils/posts';

const RECIPES: Array<[NamedLink, PostDataHeader, React.ComponentType]> = [
  ...getRecipes(firstPostHeader).map((d): [NamedLink, PostDataHeader, React.ComponentType] => [...d, () => null]),
];

const POSTS: Array<[PostDataHeader, React.ComponentType]> = [
  [firstPostHeader, FirstPost],
];

export default function App() {
  return (
    <BreakpointProvider value={Breakpoint.Large}>
      <Router>
        <Switch>
          <Route path="/recipes">
            <RecipeList routes={RECIPES} />
          </Route>
          <Route path="/posts">
            <PostList routes={POSTS} />
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
