import { React, useState } from "react";
import './form.scss';
import { useDispatch } from "react-redux";
import { loadCity } from "../../store/actions/cityAction";

export const Form = () => {
    const [location, setLocation] = useState("");
    const searchIcon = <svg width="48" height="48" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"><circle cx="11.4" cy="11.4" r="6.4"></circle><path d="M19.4 19.4l-3.48-3.48"></path></g></svg>
    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        dispatch(loadCity(location));
    };

    return (
        <form className='form'>
            <input 
                className='form__input'
                aria-label='location'
                type="text" 
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder='Search for location'
            />
            <button className='form__button' onClick={onSubmit} type="submit">{searchIcon}</button>
        </form>
    );
}