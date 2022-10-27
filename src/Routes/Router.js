import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Others/Profile/Profile";
import TremsAndConditon from "../Pages/Others/TremsAndConditon/TremsAndConditon";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/courses", element: <Courses></Courses> },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/profile", element: <Profile></Profile> },
    ],
  },
  { path: "/registration", element: <Registration></Registration> },
  { path: "/login", element: <Login></Login> },
  {
    path: "/termsAndCondition",
    element: <TremsAndConditon></TremsAndConditon>,
  },
  { path: "*", element: <NotFound></NotFound> },
]);
