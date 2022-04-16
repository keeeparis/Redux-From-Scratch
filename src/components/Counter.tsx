import React from 'react'

import useDispatch from '../hooks/useDispatch'
import useSelector from '../hooks/useSelector'

import { updateCounter } from '../store/actionCreators'
import { selectCounter } from '../store/mainReducer'

const Counter = () => {
    const counter = useSelector(selectCounter)
    const dispatch = useDispatch()

    const handleUpdateCounter = (value: number) => () => {
        dispatch(updateCounter(value))
    }

    return (
        <div>
            <button type="button" onClick={handleUpdateCounter(-1)}>-</button>
            <span>
                {' '}
                {counter}
                {' '}
            </span>
            <button type="button" onClick={handleUpdateCounter(1)}>+</button>
        </div>
    )
}

export default Counter
