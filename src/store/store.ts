import { initialState, mainReducer } from './mainReducer'
import { PayloadAction, ReducerType } from './types'

export const validateAction = (action: PayloadAction) => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Action must be an object!')
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type!')
    }
}

export const createStore = (reducer: ReducerType, defaultState: typeof initialState) => {
    let state = defaultState

    const listeners: any[] = []
    const getState = () => state
    const coreDispatch = (action: PayloadAction) => {
        validateAction(action)
        state = reducer(state, action)
        listeners.forEach((handler: any) => handler())
    }

    const store = {
        dispatch: coreDispatch,
        getState,
        subscribe: (handler: any) => {
            listeners.push(handler)
            return () => {
                const index = listeners.indexOf(handler)
                if (index > 0) {
                    listeners.splice(index, 1)
                }
            }
        },
    }
    store.dispatch({ type: '@@redux/INIT' })
    return store
}

export const store = createStore(mainReducer, initialState)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type StoreType = typeof store
