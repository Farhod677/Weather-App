import React, { useState } from 'react';
import './popular.scss';
import { useDispatch } from 'react-redux';
import { loadCity } from "../../store/actions/cityAction";

export const Popular = () => {
    const [popular] = useState(['Tashkent', 'Samarkand', 'Namangan', 'Fergana', 'Khiva', 'Andijan']);
    const dispatch = useDispatch();

    return (
        <div className="popular">
            <ul className='popular__list'>
                {popular.map((popular, index) => (
                    <li className='popular__item' onClick={() => dispatch(loadCity(popular))} key={index}>{popular}</li>
                ))}
            </ul>
            <hr />
        </div>
    );
}