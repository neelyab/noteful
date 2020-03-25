import React, {Component } from 'react';
import Note from '../Note/Note';

class DetailOfNote extends Component {
    render() {
        console.log(this.props.note);
        console.log(this.props.note.id)
        return (
            <div>{this.props.note.name}</div>

        )
    }
}

export default DetailOfNote;