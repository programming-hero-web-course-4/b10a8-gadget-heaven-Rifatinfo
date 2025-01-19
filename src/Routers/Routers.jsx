import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Statistics from "../Components/Statistics/Statistics";
import Dashboard from "../Components/Dashboard/Dashboard";
import GadgetDetails from "../Pages/GadgetDetails";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement : <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader : () => fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        },
        {
          path: "/gadget/:slug",
          element: <GadgetDetails/>,
          loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/phone/${params.slug}`)
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