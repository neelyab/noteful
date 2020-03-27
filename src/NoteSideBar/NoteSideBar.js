import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import NotefulContext from '../NotefulContext'

class NoteSideBar extends Component {
    static contextType = NotefulContext
   handleBack = () =>{
       this.props.history.push('/');
   }
    render(){
        const matchingNote= this.context.notes.find(note=>note.id===this.props.match.params.noteId);
        console.log(matchingNote)
        const matchingFolder = this.context.folders.find(folder=>folder.id===matchingNote.folderId)
        console.log(matchingFolder)
        return(
            <NotefulContext.Consumer>
                {(context) => (
            <div>
                <h2>{matchingFolder.name}</h2>
                <button className="back"
                onClick={this.handleBack}
                >Back</button>
            </div>
            )}
            </NotefulContext.Consumer>
        )
    }
}
export default withRouter(NoteSideBar)