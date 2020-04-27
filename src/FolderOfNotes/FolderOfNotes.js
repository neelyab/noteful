import React, {Component} from 'react';
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom'
import ListError from '../ListError/ListError'

class FolderOfNotes extends Component {
    static contextType = NotefulContext;
    render() {
    const folderId = Number(this.props.match.params.folderId)
    const notesFolder=this.context.notes.filter(note=> note.folderId === folderId)
    const notes= notesFolder.map(note => (<Note key={note.id}  id={note.id} name={note.note_name} modified={note.modified} folderId={note.folderId} content={note.content}/>)
    );
        return (
            <ListError>
            <div>
                    <div>{notes}</div>
                    <Link to='/add-note'><button className="add-note">Add Note</button></Link>
            </div>
            </ListError>
        )
    }


}
export default FolderOfNotes;