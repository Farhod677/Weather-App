import React from 'react';
import Sidebar from '../Sidebar';
import Info from '../Info';
import './page.scss';

export const Page = () => {
    return (
        <div className="page">
            <Info />
            <Sidebar />
        </div>
    );
}
