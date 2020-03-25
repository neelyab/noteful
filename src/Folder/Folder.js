import React, {Component} from 'react';
import './Folder.css'

class Folder extends Component {
    render(){
        return (
            <li key={this.props.folderId}
            className={this.props.className}>
                <a href={this.props.link}>
                {this.props.name}
                </a>
                </li>
        )
    }
}
export default Folder;