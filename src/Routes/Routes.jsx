import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Booking from "../pages/Booking/Booking";
import BookingInfo from "../pages/BookingInfo/BookingInfo";
import PrivetRoute from "./PrivetRoute";

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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <Register></Register>,
      },
      // {
      //   path: "/checkOut/:id",
      //   element: <CheckOut></CheckOut>,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/services/${params.id}`),
      // },
      {
        path: "bookings",
        element: (
          <PrivetRoute>
            <BookingInfo></BookingInfo>
          </PrivetRoute>
        ),
      },
      {
        path: "/book/:id",
        element: (
          <PrivetRoute>
            <Booking></Booking>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
