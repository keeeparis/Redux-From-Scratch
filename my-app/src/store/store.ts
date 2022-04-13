import { initialState, mainReducer } from './reducer'
import { PayloadAction, ReducerType } from './types'

export const validateAction = (action: PayloadAction) => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Action must be an object!')
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type!')
    }
}

export const createStore = (reducer: ReducerType) => {
    let state: typeof initialState

    const subscribers: any[] = []
    const coreDispatch = (action: PayloadAction) => {
        validateAction(action)
        state = reducer(state, action)
        subscribers.forEach((handler: any) => handler())
    }
    const getState = () => state

    const store = {
        dispatch: coreDispatch,
        getState,
        subscribe: (handler: any) => {
            subscribers.push(handler)
            return () => {
                const index = subscribers.indexOf(handler)
                if (index > 0) {
                    subscribers.splice(index, 1)
                }
            }
        },
    }
    store.dispatch({ type: '@@redux/INIT' })
    return store
}

export const store = createStore(mainReducer)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type StoreType = typeof store
