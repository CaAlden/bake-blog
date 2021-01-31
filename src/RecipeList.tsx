import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Recipe } from "../types";
import { RecipeCard } from "./layout/Cards";
import ListLayout from "./layout/ListLayout";
import PageLayout from "./layout/PageLayout";

interface IProps {
  routes: Array<[Recipe<any>, React.ComponentType]>;
}

const RecipeList: React.FC<IProps> = ({ routes }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      {routes.map(([recipe, Component]) => (
        <Route path={recipe.link.url} key={recipe.link.url}>
          <Component />
        </Route>
      ))}
      <Route exact path={match.path}>
        <PageLayout title="Recipes">
          <ListLayout>
            {routes.length === 0 ? (
              <span>No Results</span>
            ) : (
              routes.map(([recipe]) => (
                <RecipeCard key={recipe.link.name} {...recipe} recipeLink={recipe.link} />
              ))
            )}
          </ListLayout>
        </PageLayout>
      </Route>
      <Route path="*">404</Route>
    </Switch>
  );
};

export default RecipeList;
