import React, {Component} from 'react';
import './Note.css';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import NoteError from '../NoteError/NoteError';
import PropTypes from 'prop-types'


class Note extends Component {
    state = {
        error: null
    }
    handleDelete(id, callback){
        fetch(`http://localhost:9090/notes/${id}`, {
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
            callback(id)
        })
        .catch(error=> {
            this.setState({error: error})
        })
    }
    render(){
        return (
            <NotefulContext.Consumer>
                {(context)=> {
                    return(
                        <NoteError>
                        <li className="note">
                        <span className="note-name"><Link to={`/note/${this.props.id}`}>{this.props.name}</Link></span>
                        <p>{Date(this.props.modified)}</p>
                        {this.state.error && <p>Something went wrong, please try again later.</p>}
                        <button className="delete" id={this.props.id} onClick={()=>this.handleDelete(this.props.id, context.deleteNote)}>Delete</button>
                        </li>
                        </NoteError>
                    )}
                }
            </NotefulContext.Consumer>
        )
    }
 
}
Note.propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      modified: PropTypes.string,
      folderId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    };

export default Note;