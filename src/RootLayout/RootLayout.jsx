import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <h1>this is home </h1>
            <Outlet />
        </div>
    );
};

export default RootLayout; <Outlet />