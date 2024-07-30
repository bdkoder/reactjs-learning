import { INCREMENET, DECREMENT } from "./actionTypes";

export const increment = (value) => {
    console.log(value);
    return {
        type: INCREMENET,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};