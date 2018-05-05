import { createStore } from "redux";

const store = createStore((state = {count: 10}, action) => {
    // console.log('running');
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 0 ;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 0 ;
        return {
            count: state.count - decrementBy
        };
        case 'SET':
        return {
            count: action.count
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

// subscirbe for call every dispatch action
const unSubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// Un Subscribe for stop the subscribe fun
// unSubscribe();

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 2
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});



