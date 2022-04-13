import React from 'react'
import Counter from './Counter'
import Step from './Step'

const App = ({
    counter,
    stepSize,
    onUpdateCounter,
    onChangeStepSize,
    onDoNothing,
} : {
    counter: number,
    stepSize: number,
    onUpdateCounter: any,
    onChangeStepSize: any,
    onDoNothing: any
}) => (
    <div>
        <Step
            stepSize={stepSize}
            onChangeStepSize={onChangeStepSize}
        />
        <Counter
            counter={counter}
            onUpdateCounter={onUpdateCounter}
            stepSize={stepSize}
        />
        <button type="button" onClick={() => onDoNothing()}>Do Nothing</button>
    </div>
)

export default App
