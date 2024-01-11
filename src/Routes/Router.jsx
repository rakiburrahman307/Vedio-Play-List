import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import VideoDetails from "../Pages/VideoList/VideoDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage404 from "../Pages/ErrorPage404/ErrorPage404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/video/:id',
        element: <PrivateRoute><VideoDetails></VideoDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://video-play-list-server.vercel.app/allVideos/${params.id}`)
      }
    ],
  },
]);

export default router;