/* eslint-disable no-shadow */
import React, { ReactElement } from 'react'
import { StoreType } from './store'

const Provider = ({
    store, children,
} : {
    store: StoreType, children: ReactElement
}) => {
    const Context = React.createContext(store)

    return (
        <Context.Provider value={store}>
            <Context.Consumer>
                {(store) => {
                    const childrenWithStore = React.Children.map(
                        children,
                        (child) => React.cloneElement(child, { store }),
                    )
                    return <div>{childrenWithStore}</div>
                }}
            </Context.Consumer>
        </Context.Provider>
    )
}

export default Provider
