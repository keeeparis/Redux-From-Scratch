/* eslint-disable react/prop-types */
import React from 'react'

const NoteEditor = ({
    note, onChangeNote, onCloseNote,
} : {
    note: any, onChangeNote: any, onCloseNote: any
}) => (
    <div>
        <div>
            <textarea
                className="editor-content"
                value={note.content}
                onChange={(event) => onChangeNote(note.id, event.target.value)}
                cols={80}
                rows={10}
            />
        </div>
        <button
            className="editor-button"
            type="button"
            onClick={onCloseNote}
        >
            Close
        </button>
    </div>
)

export default NoteEditor
