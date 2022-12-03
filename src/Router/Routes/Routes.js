import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Footer from "../../Pages/Shard/Footer/Footer";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path:"/",element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/footer",element:<Footer></Footer>
        },
        {
            path:"/login",element:<Login></Login>
        },
        {
            path:"/signup",element:<SignUp></SignUp>
        },
        {
          path:"/checkout/:id",
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader:({params})=>fetch(`https://genius-car-server-psi-three.vercel.app/services/${params.id}`)
        },
        {
          path:"/orders",
          element:<Orders></Orders>
        }
      ]
    }
  ])

  export default router;