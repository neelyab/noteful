import React, {Component } from 'react';
import './DetailOfNote.css'
import NotefulContext from '../NotefulContext'

class DetailOfNote extends Component {
    render() {
        console.log(this.props.match.params.noteId)
        return (
            <NotefulContext.Consumer>
                {(context)=>{
                const note = context.notes.find(note=>note.id===this.props.match.params.noteId) || {};
                console.log(note)
                return(
                <div>
                    <div className="note-header">
                        <h2>{note.name}</h2>
                        <p>{note.modified}</p>
                        <button className="delete">Delete</button>
                    </div>
                    <p>{note.content}</p>
                </div>
                )
                }}
            </NotefulContext.Consumer>
        )
    }
}

export default DetailOfNote;