import React from 'react';
import Note from '../Note/Note'

function FolderOfNotes(props) {
    const myNotes= props.notesFolder
    console.log(myNotes);
   const notesFolder= myNotes.map(note => (<Note name={note.name} id={note.id} modified={note.modified} content={note.content}/>)
    );
    return (
        <div>
                <div>{notesFolder}</div>
        </div>
    )


}
export default FolderOfNotes;