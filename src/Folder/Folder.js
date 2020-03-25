import React, {Component} from 'react';

class Folder extends Component {
    render(){
        return (
            <li key={this.props.folderId}>
                <a href={this.props.link}>
                {this.props.name}
                </a>
                </li>
        )
    }
}
export default Folder;