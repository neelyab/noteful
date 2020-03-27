import React, {Component} from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext'

class MainPage extends Component {
    static contextType = NotefulContext;
    render() {
        return(
           this.context.notes.map(note=>{
                return <Note key={note.id} 
                        id={note.id} 
                        name={note.name} 
                        modified={note.modified} 
                        folderId={note.folderId}/>
                 }
            
            )
        )
    }
}
export default MainPage;