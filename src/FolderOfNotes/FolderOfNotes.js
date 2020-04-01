import React, {Component} from 'react';
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom'

class FolderOfNotes extends Component {
    static contextType = NotefulContext;
    render() {
    const notesFolder=this.context.notes.filter(note=>note.folderId===this.props.match.params.folderId)
   const notes= notesFolder.map(note => (<Note key={note.id} name={note.name} id={note.id} modified={note.modified} content={note.content}/>)
    );
        return (
            <div>
                    <div>{notes}</div>
                    <Link to='/add-note'><button className="add-note">Add Note</button></Link>
            </div>
        )
    }


}
export default FolderOfNotes;