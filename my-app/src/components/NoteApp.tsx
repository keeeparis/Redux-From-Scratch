/* eslint-disable no-unused-vars */
import React from 'react'
import NoteEditor from './NoteEditor'
import NoteList from './NoteList'
import { CREATE_NOTE, reducer, UPDATE_NOTE } from '../store/reducer'
import { createStore } from '../store/store'

const App = ({
    notes, openNoteId, onAddNote, onChangeNote,
    onOpenNote, onCloseNote,
} : {
    notes: any, openNoteId: any, onAddNote: any, onChangeNote: any,
    onOpenNote: any, onCloseNote: any,
}) => (
    <div>
        {
            openNoteId
                ? (
                    <NoteEditor
                        note={notes[openNoteId]}
                        onChangeNote={onChangeNote}
                        onCloseNote={onCloseNote}
                    />
                )
                : (
                    <div>
                        <NoteList
                            notes={notes}
                            onOpenNote={onOpenNote}
                        />
                        <button
                            className="editor-button"
                            onClick={onAddNote}
                            type="button"
                        >
                            New Note
                        </button>
                    </div>
                )
        }
    </div>
)

export default App
