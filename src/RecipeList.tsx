import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { NamedLink, PostDataHeader } from "../types";
import { RecipeCard } from "./layout/Cards";
import ListLayout from "./layout/ListLayout";
import PageLayout from "./layout/PageLayout";

interface IProps {
  routes: Array<[NamedLink, PostDataHeader, React.ComponentType]>;
}

const RecipeList: React.FC<IProps> = ({ routes }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      {routes.map(([link, header, Component]) => (
        <Route path={link.url} key={link.url}>
          <Component />
        </Route>
      ))}
      <Route exact path={match.path}>
        <PageLayout title="Recipes">
          <ListLayout>
            {routes.length === 0 ? (
              <span>No Results</span>
            ) : (
              routes.map(([link, header]) => (
                <RecipeCard recipeLink={link} {...header} />
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
