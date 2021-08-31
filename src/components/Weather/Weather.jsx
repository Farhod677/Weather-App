import React from 'react';
import './weather.scss';
import { useSelector } from 'react-redux';
import moment from 'moment';

export const Weather = () => {
    const current = useSelector(state => state.current.current);
    const longDateStr = moment(current.location.localtime.slice(0, 10), 'Y/M/D').format('dddd D MMMM Y');
    const time = current.location.localtime.slice(11);

    return (
        <div className="weather">
            <h1 className="weather__degree">{current.current.temp_c}&#8451;</h1>
            <div className="weather__info">
                <h2 className='weather__city'>{current.location.name}</h2>
                <p className='weather__text'>{time} - {longDateStr}</p>
            </div>
            <div className="weather__media">
                <img className='weather__image' src={current.current.condition.icon} alt="Icon" />
                <p className='weather__text'>{current.current.condition.text}</p>
            </div>
        </div>
    );
}
 
