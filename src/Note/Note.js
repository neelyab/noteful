import React, {Component} from 'react';
import './Note.css';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import NoteError from '../NoteError/NoteError';
import PropTypes from 'prop-types'
import config from '../config'


class Note extends Component {
    state = {
        error: null
    }
    handleDelete(id, callback){
        fetch(`${config.API_ENDPOINT}/api/notes/${id}`, {
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
            // return res.json()
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
                        <div className="note">
                            <li>
                            <span className="note-name"><Link to={`/note/${this.props.id}`}>{this.props.name}</Link></span>
                            <p>{Date(this.props.modified)}</p>
                            {this.state.error && <p>Something went wrong, please try again later.</p>}
                            <button className="delete" id={this.props.id} onClick={()=>this.handleDelete(this.props.id, context.deleteNote)}>Delete</button>
                            </li>
                        </div>
                        </NoteError>
                    )}
                }
            </NotefulContext.Consumer>
        )
    }
 
}
Note.propTypes = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      
      folderid: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    };

export default Note;