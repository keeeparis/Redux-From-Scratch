/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Context } from './Provider'

const connect = (
    mapStateToProps: any,
    mapDispatchToProps: any,
) => (Component: React.Component) => {
    const store = useContext(Context)
    const state = store
}

export default connect
