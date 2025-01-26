import { BillingIcon, Dashboard, Exams, Settings,Features, StudentsIcon } from "../assets/icons"
import {PATH} from "../hooks/usePath"
import {Home, Students,Featuress,Exam   , Billing, Settingss,Teachers} from "../pages/Dashboard"
import { Login, Register } from "../pages/Login"
import React from "react"
export const dashboardRouteList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        children:[]
    },
    {
        id:2,
        path:PATH.teachers,
        element:<Teachers/>,
        children:[]
    },
    {
        id:3,
        path:PATH.students,
        element:<Students/>,
        children:[]
    },
    {
        id:4,
        path:PATH.billing,
        element:<Billing/>,
        children:[]
    },
    {
        id:5,
        path:PATH.settingss,
        element:<Settingss/>,
        children:[]
    },
    {
        id:6,
        path:PATH.exam,
        element:<Exam/>,
        children:[]
    },
    {
        id:7,
        path:PATH.features,
        element:<Featuress/>,
        children:[]
    },

]

export const loginRoutes = [
    {
      id:1,
      path:PATH.home,
      element:<Login/>,
      children:[]
   },
    {
      id:2,
      path:PATH.register,
      element:<Register/>,
      children:[]
   },
]

export const navbarList = [
    {
        id:1,
        title:"Home",
        path:PATH.home,
        icon:<Dashboard active={false}/>,
        activeIcon:<Dashboard active={true}/>
    },
    {
        id:2,
        title:"Teachers",
        path:PATH.teachers,
        icon:<Dashboard active={false}/>,
        activeIcon:<Dashboard active={true}/>,
    },
    {
        id:3,
        title:"Students",
        path:PATH.students,
        icon:<StudentsIcon active={false}/>,
        activeIcon:<StudentsIcon active={true}/>,
    },
    {
        id:4,
        title:"Billing",
        path:PATH.billing,
        icon:<BillingIcon active={false}/>,
        activeIcon:<BillingIcon active={true}/>,
    },
    {
        id:5,
        title:"Settings and profile",
        path:PATH.settingss,
        icon:<Settings active={false}/>,
        activeIcon:<Settings active={true}/>,
    },
    {
        id:6,
        title:"Exams",
        path:PATH.exam,
        icon:<Exams active={false}/>,
        activeIcon:<Exams active={true}/>,
    },
    {
        id:7,
        title:"Features",
        path:PATH.features,
        icon:<Features active={false}/>,
        activeIcon:<Features active={true}/>,
    },
    
]