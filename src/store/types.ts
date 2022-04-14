import { RootState } from './store'

/* eslint-disable no-unused-vars */
export type PayloadAction = {
    type: string,
    payload?: any
}
export type ReducerType = (state: RootState, action: PayloadAction) => typeof state
