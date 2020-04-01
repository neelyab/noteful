import React, {Component} from 'react';
import './Note.css';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext'

function handleDelete(id, callback){
    console.log(id);
    fetch( `http://localhost:9090/notes/${id}`, {
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
        callback(id)
    })
    .catch(error=> {
        console.log(error)
    })
}
class Note extends Component {

    render(){
        return (
            <NotefulContext.Consumer>
                {(context)=> {
                    return(
                        <li className="note">
                        <span className="note-name"><Link to={`/note/${this.props.id}`}>{this.props.name}</Link></span>
                        <p>{Date(this.props.modified)}</p>
                        <button className="delete" id={this.props.id} onClick={()=>handleDelete(this.props.id, context.deleteNote)}>Delete</button>
                        </li>
                    )}
                }
            </NotefulContext.Consumer>
        )
    }
}
export default Note;