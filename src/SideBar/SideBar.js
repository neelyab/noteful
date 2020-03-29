import React, {Component} from 'react'
import {Route } from 'react-router-dom'
import SideBarMain from '../SideBarMain/SideBarMain'
import NoteSideBar from '../NoteSideBar/NoteSideBar'
import SideBarHighlighted from '../SideBarHighlighted/SideBarHighlighted'
import './SideBar.css';
import Note from '../Note/Note'

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
                    component={SideBarHighlighted}
                 />
                 <Route 
                    path='/note/:noteId'
                    component={NoteSideBar}
                    />
                </ul>
            </div>
        )
    }
}