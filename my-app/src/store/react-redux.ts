import {
    CLOSE_NOTE, CREATE_NOTE, OPEN_NOTE, UPDATE_NOTE,
} from './reducer'

export const mapStateToProps = (state: any) => ({
    notes: state.notes,
    openNoteId: state.openNoteId,
})

export const mapDispatchToProps = (dispatch: any) => ({
    onAddNote: () => dispatch({
        type: CREATE_NOTE,
    }),
    onChangeNote: (id: any, content: any) => dispatch({
        type: UPDATE_NOTE,
        id,
        content,
    }),
    onOpenNote: (id: any) => dispatch({
        type: OPEN_NOTE,
        id,
    }),
    onCloseNote: () => dispatch({
        type: CLOSE_NOTE,
    }),
})
