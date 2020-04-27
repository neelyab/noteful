import React, {Component} from 'react';
import './Folder.css'
import {NavLink} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

function handleDeleteFolder(id, cb){
    console.log(id);
    console.log(cb)
    fetch( `http://localhost:8000/api/folders/${id}`, {
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
        const folderNum = Number(this.props.routerProps.folderId)
        console.log(folderNum)
        const folderToHighlight = this.context.folders.find(folder=> folder.id === folderNum) || {};
        console.log(folderToHighlight)
        console.log(this.props.folderId)
        return (
            <NotefulContext.Consumer>
                {(context)=> {
                return (
                    <NavLink to={this.props.link}>
                    <li key={this.props.folderId}
                    className={this.props.folderId === folderToHighlight.id ? 'folder highlighted' : 'folder'}>
                    {this.props.name}
                    <button className="delete-folder" id={this.props.id} onClick={()=>handleDeleteFolder(this.props.folderId, context.deleteFolder)}>Delete</button>
                    </li>
                </NavLink>
                )
                }
            }
                </NotefulContext.Consumer>
        )
    }
}
Folder.propTypes = {
    folderId: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };
export default Folder;