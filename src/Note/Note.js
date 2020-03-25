import React, {Component} from 'react';
import './Note.css'

class Note extends Component {
    render(){
        return (
            <li className="note">
            <span className="note-name"><a href={`/note/${this.props.id}`}>{this.props.name}</a></span>
            <p>{this.props.modified}</p>
            <button className="delete" id={this.props.id}>Delete</button>
            </li>
        )
    }
}
export default Note;