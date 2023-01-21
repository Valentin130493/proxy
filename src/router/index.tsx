import { createHashRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router";
import { routes } from "../static/routes";
import { Layout } from "../components";
import { Main, Posts, Error, User } from "../pages";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path={routes.layout} element={<Layout />}>
      <Route index element={<Main />} />
      <Route path={routes.user} element={<User />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.error} element={<Error />} />
    </Route>
  )
);
