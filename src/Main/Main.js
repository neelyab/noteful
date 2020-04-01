import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MainPage from '../MainPage/MainPage'
import FolderOfNotes from '../FolderOfNotes/FolderOfNotes'
import DetailOfNote from '../DetailOfNote/DetailOfNote'
import './Main.css';
import AddFolder from '../AddFolder/AddFolder';

export default class Main extends Component {
    
    render() {
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
                       component={DetailOfNote}
                        />
                <Route
                    path='/add-folder'
                    component={AddFolder}
                    />
                    </ul>
            </div>
        )
    }
}
