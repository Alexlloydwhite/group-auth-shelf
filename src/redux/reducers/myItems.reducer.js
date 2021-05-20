const myItems = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_ITEMS':
            return action.payload;
        default: 
            return state;
    }
};

export default myItems;