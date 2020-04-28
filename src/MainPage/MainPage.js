import React, {Component} from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom'
import ListError from '../ListError/ListError'

class MainPage extends Component {
    static contextType = NotefulContext;
    render() {
        return(
            <ListError>
            <>
           {this.context.notes.map(note=>{
                return <Note key={note.id} 
                        id={note.id} 
                        name={note.note_name} 
                        modified={note.modified} 
                        folderid={note.folderid}
                        content={note.content}/>
                 })
                
            }
               <Link to='/add-note'><button className="add-note">Add Note</button></Link>
            </>
            </ListError>
        )
    }
}
export default MainPage;