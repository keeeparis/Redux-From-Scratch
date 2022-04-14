import React, { ReactElement, useMemo } from 'react'
import { Context, ContextType } from './context'
import { StoreType } from '../store/store'

const Provider = ({
    store, children,
} : {
    store: StoreType, children: ReactElement | ReactElement[]
}) => {
    const contextValue: ContextType = useMemo(() => ({
        store,
    }), [store])

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Provider
