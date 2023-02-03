import React from 'react';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
    return (
        <div>
            layout working
            <Outlet/>
        </div>
    );
};

export default CommonLayout;