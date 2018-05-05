import { createStore } from "redux";

const store = createStore((state = {count: 10}, action) => {
    // console.log('running');
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
        return {
            count: state.count - 1
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
            return state;
    }
    return state;
});

console.log(store.getState());

// Do this Actions
// I'd like to increment the count
store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState());

// I'd like to decrement the count
store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());

// I'd like to reset the count
store.dispatch({
    type: 'RESET'
});

console.log(store.getState());
