import React from 'react';
import Form from '../Form';
import Details from '../Details';
import Popular from '../Popular';
import { useSelector } from 'react-redux';
import './sidebar.scss';

export const Sidebar = () => {
    const isLoading = useSelector(state => state.current.isLoading);
    
    return (
        <div className='sidebar'>
            <Form />
            <Popular />
            {!isLoading && <Details />}
        </div>
    );
}