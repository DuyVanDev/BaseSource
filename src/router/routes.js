import routes from "@/config/routes";
import BookRoom from "@/pages/BookRoom/BookRoom";
import { lazy } from "react";
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const User = lazy(() => import("@/pages/User"));
const Room = lazy(() => import("@/pages/Room/Room"));
const Service = lazy(() => import("@/pages/Service/Service"));
const Option = lazy(() => import("@/pages/Option/Option"));
const PriceRoom = lazy(() => import("@/pages/PriceRoom/PriceRoom"));
const WorkSchedule = lazy(() => import("@/pages/WorkSchedule/WorkSchedule"));


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
  {
    path: routes.room,
    childrend: Room,
    layout: DefaultLayout,
  },
  {
    path: routes.bookroom,
    childrend: BookRoom,
    layout: DefaultLayout,
  },
  {
    path: routes.service,
    childrend: Service,
    layout: DefaultLayout,
  },
  {
    path: routes.option,
    childrend: Option,
    layout: DefaultLayout,
  },
  {
    path: routes.priceroom,
    childrend: PriceRoom,
    layout: DefaultLayout,
  },
  {
    path: routes.workschedule,
    childrend: WorkSchedule,
    layout: DefaultLayout,
  },
  
];

export const protectedRoute = [];
