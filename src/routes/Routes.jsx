import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "bookings",
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      },
      {
        path: "book/:id",
        element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-my-prac.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;
