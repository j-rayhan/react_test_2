import { createStore } from "redux";

const store = createStore((state = {count: 0}) => {
    return state;
});

console.log(store.getState());

// Do this Actions
// I'd like to increment the count
// I'd like to decrement the count
// I'd like to reset the count

