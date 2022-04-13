/* eslint-disable no-unneeded-ternary */
import React from 'react'

const Step = ({
    stepSize,
    onChangeStepSize,
} : {
    stepSize: number,
    onChangeStepSize: any
}) => (
    <div>
        <div>Значение счётчика должно увеличиваться или уменьшаться на заданную величину шага</div>
        <div>
            Текущая величина шага:
            {' '}
            {stepSize}
        </div>
        <input
            type="range"
            min="1"
            max="5"
            value={stepSize}
            onChange={({ target }) => onChangeStepSize(Number(target.value))}
        />
    </div>
)

export default Step
