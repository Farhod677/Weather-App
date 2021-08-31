import axios from 'axios';


export const loadCity = (location) => async (dispatch) => {
    const current = await axios.get(`https://api.weatherapi.com/v1/current.json?key=43bcd4ae68144414b42102242213008&q=${location}`);
    dispatch({
        type: 'FETCH_CITY',
        payload: {
            current: current.data
        }
    });
    dispatch({
        type: 'LOADED'
    })
};