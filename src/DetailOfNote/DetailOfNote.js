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
                return(
                <div>
                    <div className="note-header">
                        <h2>{note.name}</h2>
                        <p>{note.modified}</p>
                    </div>
                    <p>{}</p>
                </div>
                )
                }}
            </NotefulContext.Consumer>
        )
    }
}

export default DetailOfNote;