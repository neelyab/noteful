import React, {Component } from 'react';
import './DetailOfNote.css';
import NotefulContext from '../NotefulContext';
import NoteError from '../NoteError/NoteError'


class DetailOfNote extends Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {(context) => {
                const note = context.notes.find(note=>note.id===this.props.match.params.noteId) || {};
                const date = note.modified;                
                return(
                    <NoteError>
                <div>
                    <div className="note-header">
                        <h2>{note.name}</h2>
                        <p>{Date(date)}</p>
                    </div>
                    <div className="note-content">
                    <p>{note.content}</p>
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