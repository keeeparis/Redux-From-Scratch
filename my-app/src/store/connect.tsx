import React, { useCallback, useEffect, useState } from 'react'

interface Props {
    store?: any
}

const connect = (
    mapStateToProps: any,
    mapDispatchToProps: any,
) => (
    Component: any,
) => function connected(props : Props) {
    const [, updateState] = useState({})
    const forceUpdate = useCallback(() => updateState({}), [])

    useEffect(() => {
        const unsubscribe = props.store.subscribe(forceUpdate)
        return () => unsubscribe()
    }, [props.store.getState()])

    return (
        <Component
            {...props}
            {...mapStateToProps(props.store.getState(), props)}
            {...mapDispatchToProps(props.store.dispatch, props)}
        />
    )
}

export default connect

/* ) => class Connected extends React.Component<Props> {
    unsubscribe: any

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(this.handleChange.bind(this))
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleChange() {
        this.forceUpdate()
    }

    render() {
        return (
            <Component
                {...this.props}
                {...mapStateToProps(this.props.store.getState(), this.props)}
                {...mapDispatchToProps(this.props.store.dispatch, this.props)}
            />
        )
    }
} */
