import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import VideoDetails from "../Pages/VideoList/VideoDetails";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
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
          path:'/video/:id',
          element: <PrivateRoute><VideoDetails></VideoDetails></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/allVideos/${params.id}`)
        }
      ],
    },
  ]);

  export default router;