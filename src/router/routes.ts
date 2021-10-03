import IRoute from "./routing_interfaces";
import LoginPage from "../ui/modules/login/pages/login";
import HomePage from "../ui/modules/home/pages/home";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: false
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },
];

export default routes;
