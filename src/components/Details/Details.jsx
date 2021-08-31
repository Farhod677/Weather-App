import React from 'react';
import './details.scss';
import { useSelector } from 'react-redux';

export const Details = () => {
    const current = useSelector(state => state.current.current.current);

    return (
        <div className="details">
            <h1 className='details__heading'>Weather Details</h1>
            <div className="details__info">
                <ul className="details__list">
                    <li className='details__key'>Cloud</li>
                    <li className='details__key'>Humidity</li>
                    <li className='details__key'>Wind</li>
                    <li className='details__key'>Feels Like</li>
                </ul>
                <ul className="details__list">
                    <li className='details__value'>{`${current.cloud}%`}</li>
                    <li className='details__value'>{`${current.humidity}%`}</li>
                    <li className='details__value'>{`${current.wind_kph}km/h`}</li>
                    <li className='details__value'>{`${current.feelslike_c}`}&#8451;</li>
                </ul>
            </div>
            <hr />
        </div>
    );
}