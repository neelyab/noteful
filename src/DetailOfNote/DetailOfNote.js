import React, {Component } from 'react';
import './DetailOfNote.css';
import NotefulContext from '../NotefulContext';
import NoteError from '../NoteError/NoteError'


class DetailOfNote extends Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {(context) => {
                const notesArray = context.notes
                const noteId = Number(this.props.match.params.noteId)
                const note = notesArray.find(note => note.id === noteId) || {};
                const name = note.note_name;
                const date =  note.modified; 
                const content = note.content;      
                return(
                    <NoteError>
                <div>
                    <div className="note-header">
                        <h2>{name}</h2>
                        <p>{Date(date)}</p>
                    </div>
                    <div className="note-content">
                    <p>{content}</p>
                    </div>
                </div>
                </NoteError>
                )
                }}
            </NotefulContext.Consumer>
        )
    }
}

export default DetailOfNote;