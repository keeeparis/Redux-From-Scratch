import {
    UPDATE_COUNTER, CHANGE_STEP_SIZE, DO_NOTHING,
} from './constants'
import { AppDispatch, RootState } from './store'

export const mapStateToProps = (state: RootState) => ({
    counter: state.counter,
    stepSize: state.stepSize,
})

export const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onUpdateCounter: (count: number) => dispatch({
        type: UPDATE_COUNTER,
        payload: {
            count,
        },
    }),
    onChangeStepSize: (step: number) => dispatch({
        type: CHANGE_STEP_SIZE,
        payload: {
            step,
        },
    }),
    onDoNothing: () => dispatch({
        type: DO_NOTHING,
    }),
})
