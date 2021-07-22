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
import { NamedLink, PostDataHeader, PostData, Recipe as RecipeData } from '../types';
import FirstPost from './posts/first-post';
import PieCrustPost from './posts/pie-crust';
import Homepage from './Homepage';
import PostList from './PostList';
import RecipeList from './RecipeList';
import { data as firstPostData } from './posts/first-post/data';
import { data as pieCrustData } from './posts/pie-crust/data';
import { Breakpoint, BreakpointProvider, ConfigProvider, QueryProvider } from './context';
import { getRecipes } from './utils/posts';
import connectData, { connectRecipe } from './utils/connectData';
import Recipe from './Recipe';

const RECIPES: Array<[RecipeData, React.ComponentType]> = [
  ...getRecipes(firstPostData).map((recipe): [RecipeData, React.ComponentType] => [recipe, connectRecipe(recipe, Recipe) ]),
];

const POSTS: Array<[PostDataHeader, React.ComponentType]> = [
  [pieCrustData, PieCrustPost],
  [firstPostData, FirstPost],
];

export default function App() {
  return (
    <ConfigProvider>
      <BreakpointProvider>
        <Router>
          <QueryProvider>
            <Switch>
              <Route path="/recipes">
                <RecipeList routes={RECIPES} />
              </Route>
              <Route path="/posts">
                <PostList routes={POSTS} />
              </Route>
              <Route exact path="/">
                <Homepage posts={[pieCrustData, firstPostData]} />
              </Route>
              <Route path="*">
                TODO: 404
              </Route>
            </Switch>
          </QueryProvider>
        </Router>
      </BreakpointProvider>
    </ConfigProvider>
  );
}
