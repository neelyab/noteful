import React from 'react';
import Note from '../Note/Note'

function FolderOfNotes(props) {
    const myNotes= props.notesFolder
   const notesFolder= myNotes.map(note => (<Note name={note.name} noteId={note.id}/>)
    );
    return <div>{notesFolder}</div>

}
export default FolderOfNotes;