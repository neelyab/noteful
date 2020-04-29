import React, {Component} from 'react';
import './Folder.css'
import {NavLink} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import config from '../config'


class Folder extends Component {
    static contextType = NotefulContext;
    handleDeleteFolder(id, cb, routerProps){
        fetch( `${config.API_ENDPOINT}/api/folders/${id}`, {
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
        .then(() => {
            cb(id);
    
        })
        .then(()=>{
            routerProps.routerProps.push('/')
        })
        .catch(error=> {
            alert('something went wrong, please try again')
        })
    }
    render(){
        const folderNum = Number(this.props.routerProps.folderid)
        const folderToHighlight = this.context.folders.find(folder=> folder.id === folderNum) || {};
        return (
            <NotefulContext.Consumer>
                {(context)=> {
                return (
                    <NavLink to={this.props.link}>
                    <li key={this.props.folderid}
                    className={this.props.folderid === folderToHighlight.id ? 'folder highlighted' : 'folder'}>
                    {this.props.name}
                    <button className="delete-folder" id={this.props.id} onClick={()=>this.handleDeleteFolder(this.props.folderid, context.deleteFolder, this.props.routerProps)}>Delete</button>
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
    folderid: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };
export default Folder;