import React from 'react'

const Counter = ({
    counter,
    onUpdateCounter,
    stepSize,
} : {
    counter: number,
    onUpdateCounter: any,
    stepSize: number
}) => (
    <div>
        <button type="button" onClick={() => onUpdateCounter(-stepSize)}>-</button>
        <span>
            {' '}
            {counter}
            {' '}
        </span>
        <button type="button" onClick={() => onUpdateCounter(stepSize)}>+</button>
    </div>
)

export default Counter
