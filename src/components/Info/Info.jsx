import React from 'react';
import './info.scss';
import Weather from '../Weather';
import { useSelector } from 'react-redux';

export const Info = () => {
    const current = useSelector(state => state.current.current.current);
    const isLoading = useSelector(state => state.current.isLoading);
    let classes = 'info '
    
    if (!isLoading) {
        if (current.condition.text === 'Clear') classes += 'info--clear'
        else if (current.condition.text === 'Sunny') classes += 'info--sunny'
        else if (current.condition.text === 'Rainy') classes += 'info--rainy'
        else if (current.condition.text === 'Partly cloudy' || current.condition.text === 'Cloudy') classes += 'info--cloudy'
    }
    return ( 
        <div className={classes}>
            {!isLoading && <Weather />}
        </div>
    );
}