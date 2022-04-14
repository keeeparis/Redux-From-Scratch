import { CHANGE_STEP_SIZE, UPDATE_COUNTER } from './constants'
import { PayloadAction } from './types'

export const initialState = {
    counter: 0,
    stepSize: 1,
}

export const mainReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
    case UPDATE_COUNTER: {
        const newCounter = action.payload === -1
            ? state.counter - state.stepSize
            : state.counter + state.stepSize
        return {
            ...state,
            counter: newCounter,
        }
    }

    case CHANGE_STEP_SIZE: {
        return {
            ...state,
            stepSize: action.payload,
        }
    }

    default:
        return state
    }
}
