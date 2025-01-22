import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Statistics from "../Components/Statistics/Statistics";
import Dashboard from "../Components/Dashboard/Dashboard";
import GadgetDetails from "../Pages/GadgetDetails";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement : <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader : () => fetch("gadget.json")
        },
        {
          path: "/gadget/:id",
          element: <GadgetDetails/>,
          loader : () => fetch("gadget.json")
        },
        {
          path: "/statistics",
          element: <Statistics/>,
        },
        {
          path: "/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ],
    },
  ]);

export default router