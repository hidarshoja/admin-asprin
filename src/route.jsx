import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Services from "./pages/Services";
import EditServices from "./pages/EditServices";
import Expertise from "./pages/Expertise";
import Facility from "./pages/Facility";
import Location from "./pages/Location";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Department from "./pages/Department";
import Articles from "./pages/Articles";
import Comments from "./pages/Comments";
import ResponseComment from "./pages/ResponseComment";
import Subscription from "./pages/Subscription";
import { Financial } from "./pages/Financial";
import { Support } from "./pages/Support";
import Password from "./pages/Password";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/login/page";
import EditExpertise from "./pages/EditingExpertise";
import EditFacility from "./pages/EditFacility";
import EditLocation from "./pages/EditLocation";
import Dashboard from "./pages/Dashboard";
import ServiceProviders from "./pages/ServiceProviders";
import AddServices from "./pages/AddServices";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/edit-services',
                element: <EditServices />
            },
            {
                path: '/edit-expertise',
                element: <EditExpertise />
            },
            {
                path: '/serviceProviders',
                element: <ServiceProviders />
            },
            {
                path: '/addServices',
                element: <AddServices />
            },
            {
                path: '/expertise',
                element: <Expertise />
            },
            {
                path: '/facility',
                element: <Facility />
            },
            {
                path: '/edit-facility',
                element: <EditFacility />
            },
            {
                path: '/location',
                element: <Location />
            },
            {
                path: '/edit-location',
                element: <EditLocation />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/add-user',
                element: <AddUser />
            },
            {
                path: '/department',
                element: <Department />
            },
            {
                path: '/articles',
                element: <Articles />
            },
            {
                path: '/comments',
                element: <Comments />
            },
            {
                path: '/response-comment',
                element: <ResponseComment />
            },
            {
                path: '/subscription',
                element: <Subscription />
            },
            {
                path: '/financial',
                element: <Financial />
            },
            {
                path: '/support',
                element: <Support />
            },
            {
                path: '/password',
                element: <Password />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }


])