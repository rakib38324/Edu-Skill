import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DashBoard from "../Pages/MainDashboard/DashBoard/DashBoard";
import Layout from "../Pages/MainDashboard/Layout/Layout";
import MainDashboard from "../Pages/MainDashboard/MainDashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/maindashboard',
                element: <MainDashboard></MainDashboard>
            },
            {
                path:'/maindashboard',
                element: <Layout></Layout>,
                children:[
                    {
                        path:'/maindashboard/dashboard',
                        element:<DashBoard></DashBoard>
                    }
                ]
            },
        ]
    }
])

export default router;