import React from 'react';
import {path} from "./path";
import siteConfig from "../Config/siteConfig";
import CommonLayout from '../Layouts/CommonLayout';

let DelayTime = siteConfig.lazy_suspense_delay;
let SiteName = `| ${siteConfig.company_name}`;

console.log("delatime",DelayTime);
const Home = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Login" */ "../pages/Home/Home"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});




export const private_routes = [
    { path: `${process.env.PUBLIC_URL}${path.home}`, Component: <Home pageTitle={`Default ${SiteName}`} />, Layout: <CommonLayout /> },
]

export const public_routes = [
    // { path: `${process.env.PUBLIC_URL}${path.login}`, Component: <Login pageTitle={`Login ${SiteName}`} />, Layout: <TheAuthLayout /> },
    
]

// ************ Example for public private route *********** //
export const public_private_routes = [
    // {path: `${process.env.PUBLIC_URL}${path.registration}`, Component: <Signup pageTitle={`Sign Up ${SiteName}`}/>, Layout: <TheAuthLayout/> },
]
