import React, {Component} from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom'

class MainPage extends Component {
    static contextType = NotefulContext;
    render() {
        return(<>
           {this.context.notes.map(note=>{
                return <Note key={note.id} 
                        id={note.id} 
                        name={note.name} 
                        modified={note.modified} 
                        folderId={note.folderId}/>
                 })
                
            }
               <Link to='/add-note'><button id="add-folder">Add Note</button></Link>
            </>
        )
    }
}
export default MainPage;