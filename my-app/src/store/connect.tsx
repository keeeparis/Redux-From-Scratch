import React, {
    ElementType, useCallback, useEffect, useMemo, useState,
} from 'react'
// import { StoreType } from './store'

interface Props {
    store?: any
}

const Connect = (
    mapStateToProps: any,
    mapDispatchToProps: any,
) => (
    Component: ElementType,
) => function connected(props : Props) {
    const [a, setA] = useState(null)
    const [, updateState] = useState({})
    const forceUpdate = useCallback(() => updateState({}), [])

    useEffect(() => {
        const unsubscribe = props.store.subscribe(forceUpdate)
        return () => unsubscribe()
    }, [props])

    function deepEqual(x: any, y: any): any {
        const ok = Object.keys
        const tx = typeof x
        const ty = typeof y
        return x && y && tx === 'object' && tx === ty ? (
            ok(x).length === ok(y).length
            && ok(x).every((key) => deepEqual(x[key], y[key]))
        ) : (x === y)
    }

    const stateProps = useMemo(
        () => {
            if (deepEqual(a, props.store.getState())) {
                return a
            }
            setA(props.store.getState())
            return mapStateToProps(props.store.getState(), props)
        },
        [props.store.getState()],
    )
    console.log(stateProps)

    const dispatchProps = useMemo(
        () => mapDispatchToProps(props.store.dispatch, props),
        [props.store],
    )

    return (
        <Component
            {...props}
            // {...mapStateToProps(props.store.getState(), props)}
            {...stateProps}
            // {...mapDispatchToProps(props.store.dispatch, props)}
            {...dispatchProps}
        />
    )
}

export default Connect

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
