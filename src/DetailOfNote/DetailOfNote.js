import React, {Component } from 'react';
import './DetailOfNote.css'
import NotefulContext from '../NotefulContext'

class DetailOfNote extends Component {
    render() {
        console.log(this.props.match.params.noteId)
        return (
            <NotefulContext.Consumer>
                {(context) => {
                const note=context.notes.find(note=>note.id===this.props.match.params.noteId) || {};
                const date = note.modified;
                console.log(date);
                
                return(
                <div>
                    <div className="note-header">
                        <h2>{note.name}</h2>
                        <p>{Date(date)}</p>
                    </div>
                    <div className="note-content">
                    <p>{note.content}</p>
                    </div>
                </div>
                )
                }}
            </NotefulContext.Consumer>
        )
    }
}

export default DetailOfNote;