import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Certificates from "../Pages/MainDashboard/Certificates/Certificates";
import DashBoard from "../Pages/MainDashboard/DashBoard/DashBoard";
import EnrolledCourses from "../Pages/MainDashboard/EnrolledCourses/EnrolledCourses";

import MainDashboard from "../Pages/MainDashboard/MainDashboard";
import MyProfile from "../Pages/MainDashboard/MyProfile/MyProfile";
import OrderHistory from "../Pages/MainDashboard/OrderHistory/OrderHistory";
import Setting from "../Pages/MainDashboard/Setting/Setting";
import SignUp from "../Pages/SignUp/SignUp";

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
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            
            
        ]
    },
    {
        
            path:'/maindashboard',
            element: <MainDashboard></MainDashboard>,
            children:[
                {
                    path:'/maindashboard/dashboard',
                    element: <DashBoard></DashBoard>
                },
                {
                    path:'/maindashboard/profile',
                    element: <MyProfile></MyProfile>
                },
                {
                    path:'/maindashboard/enroulledcourses',
                    element: <EnrolledCourses></EnrolledCourses>
                },
                {
                    path:'/maindashboard/orderhistory',
                    element: <OrderHistory></OrderHistory>
                },
                {
                    path:'/maindashboard/certificate',
                    element: <Certificates></Certificates>
                },
                {
                    path:'/maindashboard/setting',
                    element: <Setting></Setting>
                },
            ]
        
    }
])

export default router;