import React, {Component} from 'react';
import './Folder.css'
import {NavLink} from 'react-router-dom';
import NotefulContext from '../NotefulContext'

function handleDeleteFolder(id, cb){
    console.log(id);
    console.log(cb)
    fetch( `http://localhost:9090/folders/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then (res => {
        if (!res.ok){
            return res.json().then(error=> {
                throw error
            })
        }
        return res.json()
    })
    .then(data=> {
        console.log(data);
        cb(id);

    })
    .catch(error=> {
        console.log(error)
    })
}

class Folder extends Component {
    static contextType = NotefulContext;
    render(){
        const folderToHighlight = this.context.folders.find(folder=>folder.id===this.props.routerProps.folderId) || {};
        return (
            <NotefulContext.Consumer>
                {(context)=> {
                return (
            <li key={this.props.folderId}
            className={this.props.folderId === folderToHighlight.id ? 'folder highlighted' : 'folder'}>
                <NavLink to={this.props.link}>
                {this.props.name}
                </NavLink>
                {/* <button className="delete" id={this.props.id} onClick={()=>handleDeleteFolder(this.props.folderId, context.deleteFolder)}>Delete</button> */}
                </li>
                )
                }
            }
                </NotefulContext.Consumer>
        )
    }
}
export default Folder;