import React, {Component} from 'react';

class Note extends Component {
    render(){
        return (
            <li>
            <a href={`/note/${this.props.id}`}>{this.props.name}</a>
            </li>
        )
    }
}
export default Note;