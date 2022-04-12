/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react'

export const Context = React.createContext<any>(null)

const Provider = ({
    store, children,
} : {
    store: any, children: any
}) => (
    <Context.Provider value={{ store }}>
        {children}
    </Context.Provider>
)

export default Provider
