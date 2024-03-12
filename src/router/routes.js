import routes from "@/config/routes";
import { lazy } from "react";
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Home = lazy(() => import("@/pages/Home"));


export const publicRoute = [
  {
    path: routes.home,
    childrend: Home,
    layout: DefaultLayout,
  },
  
];

export const protectedRoute = [];
