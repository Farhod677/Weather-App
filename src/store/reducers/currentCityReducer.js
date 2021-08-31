const initialState = {
    current: {},
    isLoading: true
};

export const currentCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITY':
            return {...state, current: action.payload.current}
        case 'LOADED':
            return {...state, isLoading: false}

        default:
            return {...state}

    }
} 