import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { HomePage, NotfoundPage } from "../menu";

const PAGES = {
  HOME: lazy(() => import("../pages/Home")),
  PAGE_404: lazy(() => import("../pages/Page404")),
};

const presentation: RouteProps[] = [
  {
    path: HomePage.HomePage.path, // Use the HomePage object
    element: <PAGES.HOME />,
  },
  {
    path: NotfoundPage.NotfoundPage.path, // Use the NotfoundPage object
    element: <PAGES.PAGE_404 />,
  },
];

const contents = [...presentation];

export default contents;
