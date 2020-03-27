import React, {Component } from 'react';
import './DetailOfNote.css'

class DetailOfNote extends Component {
    render() {
        console.log(this.props.notes)
        return (
        <div>
            <div className="note-header">
                <h2>{this.props.note.name}</h2>
                <p>{this.props.note.modified}</p>
                <button className="delete">Delete</button>
            </div>
            <p>{this.props.note.content}</p>
        </div>
        )
    }
}

export default DetailOfNote;