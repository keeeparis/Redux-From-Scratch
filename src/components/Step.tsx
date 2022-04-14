import React from 'react'
import { changeStepSize } from '../store/actionCreators'
import { RootState } from '../store/store'
import useDispatch from '../hooks/useDispatch'
import useSelector from '../hooks/useSelector'

const Step = () => {
    const stepSize = useSelector((state: RootState) => state.stepSize)
    const dispatch = useDispatch()

    const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStepSize(Number(e.target.value)))
    }

    return (
        <div>
            <div>
                Значение счётчика должно увеличиваться или
                уменьшаться на заданную величину шага
            </div>
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
                onChange={handleStepChange}
            />
        </div>
    )
}

export default Step
