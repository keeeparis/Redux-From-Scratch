import { CHANGE_STEP_SIZE, UPDATE_COUNTER } from './constants'

export const updateCounter = (value: number) => ({
    type: UPDATE_COUNTER,
    payload: value,
})

export const changeStepSize = (value: number) => ({
    type: CHANGE_STEP_SIZE,
    payload: value,
})
