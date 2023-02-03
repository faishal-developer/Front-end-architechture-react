import React from 'react';
import {path} from "./path";
import siteConfig from "../Config/siteConfig";

let DelayTime = siteConfig.lazy_suspense_delay;
let SiteName = `| ${siteConfig.company_name}`;

// const Login = React.lazy(() => {
//     return Promise.all([import(/*webpackChunkName: "Login" */ "../pages/auth/login"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
// });




export const private_routes = [
    // { path: `${process.env.PUBLIC_URL}${path.dashboard}`, Component: <Default pageTitle={`Default ${SiteName}`} />, Layout: <TheDefaultLayout /> },
]

export const public_routes = [
    // { path: `${process.env.PUBLIC_URL}${path.login}`, Component: <Login pageTitle={`Login ${SiteName}`} />, Layout: <TheAuthLayout /> },
    
]

// ************ Example for public private route *********** //
export const public_private_routes = [
    // {path: `${process.env.PUBLIC_URL}${path.registration}`, Component: <Signup pageTitle={`Sign Up ${SiteName}`}/>, Layout: <TheAuthLayout/> },
]
