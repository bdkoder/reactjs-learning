const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// initial state

const initialState = {
    value: 0,
};

// reducer
function counterReducer (state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
}

// store
const store = Redux.createStore(counterReducer);

// render
const render = () => {
    const state = store.getState();
    counterElement.textContent = state.value.toString();
}

// update ui
render();

// subscribe
store.subscribe(render);

// dispatch
incrementButton.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});

decrementButton.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' });
});