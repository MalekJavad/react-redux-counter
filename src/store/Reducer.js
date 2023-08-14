import * as actionType from './actions.js';

const initialState = {
    counter: 0,
    scores: [],
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter : state.counter + 1
            }

        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.MIN:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionType.SHOW:
            return {
                ...state,
                scores: [...state.scores, action.value]
            }
        default:
            return state
    }
}

export default Reducer;

