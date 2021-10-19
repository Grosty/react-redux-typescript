import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

const AppRouter: FC = () => {
  const auth = true;
  return auth ? (
    <Switch>
      {privateRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect to={RouteNames.DOJJI} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
