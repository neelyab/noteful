import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MainPage from '../MainPage/MainPage'
import FolderOfNotes from '../FolderOfNotes/FolderOfNotes'
import DetailOfNote from '../DetailOfNote/DetailOfNote'
import './Main.css';

export default class Main extends Component {
    
    render() {
        console.log(this.props.notes)
        const notes= this.props.notes
        return (
            <div className="main-content">
                <ul>
                <Route 
                    exact path='/'
                    component={MainPage}
                />
                <Route
                    path='/folder/:folderId'
                    component={FolderOfNotes}
                    />
                 <Route
                        path='/note/:noteId'
                        render={(routerProps)=>
                        <DetailOfNote 
                        notes={notes}
                        matchingNote={this.props.notes.find(note=>note.id===routerProps.match.params.noteId)}
                        greeting='hello'
                        />
                        }
                        />
                    </ul>
            </div>
        )
    }
}
