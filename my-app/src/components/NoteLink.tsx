import React from 'react'
import NoteTitle from './NoteTitle'

const NoteLink = ({
    note, onOpenNote,
} : {
    note: any, onOpenNote: any
}) => (
    <li className="note-list-item">
        <button
            onClick={() => onOpenNote(note.id)}
            type="button"
        >
            <NoteTitle note={note} />
        </button>
    </li>
)

export default NoteLink
