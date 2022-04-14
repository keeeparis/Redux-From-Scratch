import React from 'react'
import { updateCounter } from '../store/actionCreators'
import { RootState } from '../store/store'
import useDispatch from '../hooks/useDispatch'
import useSelector from '../hooks/useSelector'

const Counter = () => {
    const counter = useSelector((state: RootState) => state.counter)
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
