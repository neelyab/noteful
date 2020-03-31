import React, {Component} from 'react';
import {Route } from 'react-router-dom';
import SideBarMain from '../SideBarMain/SideBarMain';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import './SideBar.css';
import AddFolderSideBar from '../AddFolderSideBar/AddFolderSideBar';

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                <Route 
                    exact path='/'
                    component={SideBarMain}
                 />
                <Route
                    path='/folder/:folderId'
                    component={SideBarMain}
                 />
                 <Route 
                    path='/note/:noteId'
                    component={NoteSideBar}
                    />
                    <Route
                        path='/add-folder'
                        component={SideBarMain}
                        />
                </ul>
            </div>
        )
    }
}