import { CHANGE_STEP_SIZE, DO_NOTHING, UPDATE_COUNTER } from './constants'
import { PayloadAction } from './types'

export const initialState = {
    counter: 0,
    stepSize: 1,
}

export const mainReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
    case UPDATE_COUNTER: {
        const count = state.counter + action.payload.count
        return {
            ...state,
            counter: count,
        }
    }
    case DO_NOTHING: {
        return {
            ...state,
        }
    }

    case CHANGE_STEP_SIZE: {
        return {
            ...state,
            stepSize: action.payload.step,
        }
    }

    default:
        return state
    }
}
