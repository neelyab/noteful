import React, {Component } from 'react';
import Note from '../Note/Note';

class DetailOfNote extends Component {
    render() {
        return (
            <div><h2>{this.props.note.name}</h2>
            <p>{this.props.note.modified}</p></div>

        )
    }
}

export default DetailOfNote;