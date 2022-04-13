/* eslint-disable no-shadow */
import React from 'react'

const Provider = ({
    store, children,
} : {
    store: any, children: any
}) => {
    const Context = React.createContext<any>(store)

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
