import IRoute from "../interfaces/routes"
import HomePage from "../ui/home"
import LoginPage from "../ui/login"

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    name: "Login Page",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/login/:number",
    name: "Login Page",
    component: LoginPage,
    exact: true,
  },
]

export default routes
