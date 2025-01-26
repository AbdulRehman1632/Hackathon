import Dashboard from "./src/Pages/Dashboard/Dashboard";
import Home from "./src/Pages/Home/Home";
import LoanForm from "./src/Pages/LoanForm/LoanForm";
import UserTable from "./src/Pages/UserTable/UserTable";
import UserDashboard from "./src/Pages//UserDashboard/UserDashboard"
// import Login from "./Login/src/Pages/Login";


export const routes =[
    {
    element:<Home/>,
    path:"/",
},
{
    element:<LoanForm/>,
    path:"/LoanForm",
},
{
    element:<Dashboard/>,
    path:"/Dashboard",
},
{
    element:<UserDashboard/>,
    path:"/UserDashboard",
},
{
    element:<UserTable/>,
    path:"/UserData",
},
// {
//     element:<BlogCards/>,
//     path:"/cards",
// },

// {
//     element:<BlogDetail/>,
//     path:"/BlogDetails/:id",
// },

    // {
    //     path: '/',
    //     component: <Login/>,
    // },
    // {
    //     path: '/login',
    //     component: <Login/>,
    // },
    // {
    //     path: '/register',
    //     component: <Register/>,
    // },
    // {
    //     path: '/forgot-password',
    //     component: <ForgotPassword/>,
    // },
    // {
    //     path: '/reset-password/:token',
    //     component: <ResetPassword/>,
    // },
    // {
    //     path: '/dashboard',
    //     component: <Dashboard/>,
    // },
    // {
    //     path: '/dashboardAdmin',
    //     component: <DashboardAdmin/>,
    // }

]