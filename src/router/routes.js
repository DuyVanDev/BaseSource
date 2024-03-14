import routes from "@/config/routes";
import { lazy } from "react";
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const User = lazy(() => import("@/pages/User"));


export const publicRoute = [
  {
    path: routes.home,
    childrend: Home,
    layout: DefaultLayout,
  },
  {
    path: routes.login,
    childrend: Login,
    layout: null,
  },
  {
    path: routes.user,
    childrend: User,
    layout: null,
  },
  
];

export const protectedRoute = [];
