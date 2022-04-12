const initialState = {
    openNoteId: null,
    nextNoteId: 1,
    notes: {} as any,
}

export const CREATE_NOTE = 'CREATE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const OPEN_NOTE = 'OPEN_NOTE'
export const CLOSE_NOTE = 'CLOSE_NOTE'

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
    case CREATE_NOTE: {
        const id = state.nextNoteId
        const newNode = {
            id,
            content: '',
        }
        return {
            ...state,
            openNoteId: id,
            nextNoteId: id + 1,
            notes: {
                ...state.notes,
                [id]: newNode,
            },
        }
    }
    case UPDATE_NOTE: {
        const { id, content } = action
        const editedNote = {
            ...state.notes[id],
            content,
        }
        return {
            ...state,
            notes: {
                ...state.notes,
                [id]: editedNote,
            },
        }
    }
    case OPEN_NOTE: {
        return {
            ...state,
            openNoteId: action.id,
        }
    }
    case CLOSE_NOTE: {
        return {
            ...state,
            openNotedId: null,
        }
    }

    default:
        return state
    }
}
