import { useEffect, useRef, useState } from 'react'

import useStoreContext from './useStore'

import { RootState } from '../store/store'

const isEqual = (current: any, previous: any) => current === previous

const useSelector = (
    selector: any,
) => {
    const store = useStoreContext()
    const [, setState] = useState({})

    const newStateValue = selector(store.getState())
    const oldStateValue = useRef<RootState | null>(null)

    useEffect(() => {
        const updateCallback = () => {
            const currentSelectedState = selector(store.getState())
            if (isEqual(currentSelectedState, oldStateValue.current)) {
                return
            }
            oldStateValue.current = currentSelectedState
            setState({})
        }

        const unsubscribe = store.subscribe(() => updateCallback())

        return () => unsubscribe()
    }, [newStateValue])

    return newStateValue
}

export default useSelector
