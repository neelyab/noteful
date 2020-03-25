import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MainPage from '../MainPage/MainPage'
import FolderOfNotes from '../FolderOfNotes/FolderOfNotes'
import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <Route 
                    exact path='/'
                    render={()=>
                    <MainPage notes={this.props.notes}/>
                        }
                />
                <Route
                    path='/folder/:folderId'
                    render={(routerProps)=>
                        <FolderOfNotes
                        notesFolder={this.props.notes.filter(note=>note.folderId===routerProps.match.params.folderId)}
                        allNotes={this.props.notes}/>
                    }
                    />
            </div>
        )
    }
}
