import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCaeds from "../components/CoffeeCaeds";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch('../categories.json'),
            children:[
              {
                path:'/',
                element:<CoffeeCaeds></CoffeeCaeds>,
                loader:()=>fetch('../coffees.json')
              },
              {
                path:'/category/:category',
                element:<CoffeeCaeds></CoffeeCaeds>,
                loader:()=>fetch('../coffees.json')
              }
            ]
        },
        {
            path:'/coffees',
            element:<Coffees></Coffees>
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        }
    ]
  },
]);

export default routes;