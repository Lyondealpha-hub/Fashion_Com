import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Page404 } from "../pages/Page404/Page404";
import { Page } from "./types";

export const pages: Page[] = [{ path: "/", exact: true, component: Dashboard }];

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
