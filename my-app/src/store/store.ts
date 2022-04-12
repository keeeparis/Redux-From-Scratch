export const validateAction = (action: any) => {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Action must be an object!')
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type!')
    }
}

export const createStore = (reducer: any) => {
    let state: any
    const subscribers: any[] = []
    const store = {
        dispatch: (action: any) => {
            validateAction(action)
            state = reducer(state, action)
            subscribers.forEach((handler: any) => handler())
        },
        getState: () => state,
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
