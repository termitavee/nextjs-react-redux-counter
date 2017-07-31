const DECREMENT_COUNTER = 'app/contador/DECREMENT_COUNTER';
const INCREMENT_COUNTER = 'app/contador/INCREMENT_COUNTER';
const INIT_COUNTER = 'app/contador/INIT_COUNTER';

function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}
function increment() {
    
    return {
        type: INCREMENT_COUNTER
    }
}

function init(value, increment) {
    return {
        type: INIT_COUNTER,
        value,
        increment
    }
}

export {
    increment,
    decrement,
    init,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    INIT_COUNTER
}


