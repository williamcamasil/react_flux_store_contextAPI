const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
                //age and work
            };

        case 'SET_ALL':
            return {
                ...state,
                name: action.payload[0],
                age: action.payload[1],
                work: action.payload[2]
                //age and work
            };
        // case 'ADD_POST':
        //     return {
        //         ...state,
        //         posts: state.posts.concat(action.payload)
        //     };
        // case 'REMOVE_POST':
        //     return {
        //         ...state,
        //         posts: state.posts.filter(post => post.id !== action.payload)
        //     };
        // case 'SET_ERROR':
        //     return {
        //         ...state,
        //         error: action.payload
        //     };
        default:
            return state;
    }
};

export default Reducer;