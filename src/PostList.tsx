import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { PostDataHeader } from "../types";
import { PostCard } from "./layout/Cards";
import ListLayout from "./layout/ListLayout";
import PageLayout from "./layout/PageLayout";

interface IProps {
  routes: Array<[PostDataHeader, React.ComponentType]>;
}

const PostList: React.FC<IProps> = ({ routes }) => {
  const match = useRouteMatch();
  return (
    <Switch>
      {routes.map(([header, Component]) => (
        <Route path={header.articleLink.url} key={header.articleLink.url}>
          <Component />
        </Route>
      ))}
      <Route exact path={match.path}>
        <PageLayout title="Posts">
          <ListLayout>
            {routes.length === 0 ? (
              <span>No Results</span>
            ) : (
              routes.map(([header]) => (
                <PostCard postLink={header.articleLink} {...header} />
              ))
            )}
          </ListLayout>
        </PageLayout>
      </Route>
      <Route path="*">404</Route>
    </Switch>
  );
};

export default PostList;
