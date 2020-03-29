import React, {Component} from 'react';
import './Folder.css'
import {Link} from 'react-router-dom';

class Folder extends Component {
    render(){
        return (
            <li key={this.props.folderId}
            className={this.props.className}>
                <Link to={this.props.link}>
                {this.props.name}
                </Link>
                </li>
        )
    }
}
export default Folder;