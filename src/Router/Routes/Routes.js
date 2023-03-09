import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import DependentQuery from "../../Pages/DependentQuery/DependentQuery";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import NotFound from "../../Pages/NotFound/NotFound";
import Orders from "../../Pages/Orders/Orders";
import Protected from "../../Pages/Protected/Protected";
import Servicedetails from "../../Pages/Servicedetails/Servicedetails";
import Testing from "../../Pages/Testing/Testing";
import Register from "../../Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path:"/",
          element:<Home></Home>
        },

        {
          path:"/testing",
          element:<Testing></Testing>
        },
        {
            path:"/login",
            element:<LogIn></LogIn>
          },
          {
            path:"/register",
            element:<Register></Register>
          },
          {
            path:"/checkout/:id",
            element:<Protected><CheckOut></CheckOut></Protected>,
            loader: async ({ params }) => {
              return fetch(`https://genius-car-server-xi-rust.vercel.app/car/service/${params.id}`);
            },
          },
          {
            path:"/orders",
            element:<Protected><Orders></Orders></Protected>
          },
          {
            path:"/servicedetails/:serviceTitle",
            element:<Servicedetails></Servicedetails>
          },
          {
            path:"/dependent",
            element:<DependentQuery
                   email={"user4@example.com"}
            ></DependentQuery>
          },
          {
            path:"*",
            element:<NotFound></NotFound>
          },
      ],
    },
  ]);

export default router;