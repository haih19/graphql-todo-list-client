import { lazy } from "react";
import { IRoute } from "@/types";
import { appRoutes } from "./constant";

const MainLayout = lazy(() => import("@/layout/main-layout"));

const HomePage = lazy(() => import("@/pages/home"));

const routeList: IRoute[] = [
  {
    path: appRoutes.home,
    component: HomePage,
    layout: MainLayout,
  },
];

export { routeList };
