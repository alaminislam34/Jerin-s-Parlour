import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayout/MainLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
  },
]);
