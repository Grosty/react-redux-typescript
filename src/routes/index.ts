import React from "react";
import Login from "../pages/Login";
import Dojji from "../pages/Dojji";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  DOJJI = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login, exact: true },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.DOJJI, component: Dojji, exact: true },
];
