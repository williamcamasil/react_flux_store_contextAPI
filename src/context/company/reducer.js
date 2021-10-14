const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COMPANY':
            return {
                ...state,
                company: action.payload
                //age and work
            };
        default:
            return state;
    }
};

export default Reducer;