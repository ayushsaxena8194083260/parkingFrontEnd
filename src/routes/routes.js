import LogIn from "../components/login/login";
// import ForgetPassword from "../components/login/forgetPassword";
// import OTP from '../components/login/otp'
// import ResetPassword from '../components/login/resetPassword'
// import signUp from "../components/signup/signup";
import Dashboard from '../components/dashboard/dashboard'
import CarList from '../components/carList/Car-List'
import CarBlocked from '../components/car-blocked/Car-Blocked'
import CarHistory from '../components/car-History/Car-History'
import Home from '../components/home/home'
// import {BrowserRouter, Route, Switch} from "react-router-dom";



const dashboardRoutes = [{
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-home",
    component: Dashboard,
    layout: "/parking",
    isInSideBar: true
  },
   {
    path: "/carList",
    name: "Car List",
    icon: "fa fa-car",
    component: CarList,
    layout: "/parking",
    isInSideBar: true
  },
  {
    path: "/carHistory",
    name: "Car History",
    icon: "fa fa-history",
    component: CarHistory,
    layout: "/parking",
    isInSideBar: true
  },
  {
    path: "/carBlocked",
    name: "Blocked Car ",
    icon: "fa fa-ban ",
    component: CarBlocked,
    layout: "/parking",
    isInSideBar: true
  },
];
export default dashboardRoutes;