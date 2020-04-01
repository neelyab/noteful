import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class NoteSideBar extends Component {
   handleBack = () =>{
       this.props.history.push('/');
   }
    render(){
    
        return (
            <NotefulContext.Consumer>
                {(context)=>{
                    const matchingNote= context.notes.find(note=>note.id===this.props.match.params.noteId) || {};
                    const matchingFolder = context.folders.find(folder=>folder.id===matchingNote.folderId) || {};
                return (
                <div>
                    <div>
                    <h2>{matchingFolder.name}</h2>
                    <button className="back"
                    onClick={this.handleBack}
                    >Back</button>
                    </div>
                </div>
                )}
                }
            </NotefulContext.Consumer>
            )
           
    }
}
export default withRouter(NoteSideBar);