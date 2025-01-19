import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Statistics from "../Components/Statistics/Statistics";
import Dashboard from "../Components/Dashboard/Dashboard";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement : <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/statistics",
          element: <Statistics/>,
        },
        {
          path: "/dashboard",
          element: <Dashboard/>,
        },
      ],
    },
  ]);

export default router