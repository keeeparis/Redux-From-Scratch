import React from 'react'
import NoteLink from './NoteLink'

const NoteList = ({
    notes, onOpenNote,
} : {
    notes: any, onOpenNote: any
}) => (
    <ul className="note-list">
        {
            Object.keys(notes).map((id) => (
                <NoteLink
                    key={id}
                    note={notes[id]}
                    onOpenNote={onOpenNote}
                />
            ))
        }
    </ul>
)

export default NoteList