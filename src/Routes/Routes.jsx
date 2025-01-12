import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayout/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../LayOut/Login/Login";
import SignUpForm from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <SignUpForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
