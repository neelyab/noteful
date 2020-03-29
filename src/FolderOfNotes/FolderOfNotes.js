import React, {Component} from 'react';
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'

class FolderOfNotes extends Component {
    static contextType = NotefulContext;
    render() {
    const notesFolder=this.context.notes.filter(note=>note.folderId===this.props.match.params.folderId)
   const notes= notesFolder.map(note => (<Note key={note.id} name={note.name} id={note.id} modified={note.modified} content={note.content}/>)
    );
        return (
            <div>
                    <div>{notes}</div>
            </div>
        )
    }


}
export default FolderOfNotes;