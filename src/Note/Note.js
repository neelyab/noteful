import React, {Component} from 'react';

class Note extends Component {
    render(){
        return (
            <li>
            <a href={`/note/${this.props.noteId}`}>{this.props.name}</a>
            </li>
        )
    }
}
export default Note;