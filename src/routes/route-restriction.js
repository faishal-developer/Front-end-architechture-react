import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {path} from "./path";
import { userData } from "../Config/sessionKeys";

export const RouteRestriction = (props) => {
    const jwt_token = JSON.parse(localStorage.getItem(userData));

    return props.type === "private" && (
        jwt_token ? <Outlet /> : <Navigate to={`${path.home}`} />
    ) 
}
