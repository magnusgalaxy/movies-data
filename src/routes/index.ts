import About from "../components/pages/About";
import Home from "../components/pages/Home";
import { RouteType } from "../types";

export const routes: Array<RouteType> = [
    {
        key: 'home-page',
        path: '/',
        element: Home
    },
    {
        key: 'about-page',
        path: '/about',
        element: About,
    }
]