import React, {Component} from 'react'
import {Route } from 'react-router-dom'
import SideBarMain from '../SideBarMain/SideBarMain'
import FolderOfNotes from '../FolderOfNotes/FolderOfNotes'
import './SideBar.css';

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                 <Route 
                exact path='/'
                render={()=>
                    <SideBarMain 
                    folders={this.props.folders}
                    />
                }
                />
                <Route
                    path='/folder/:folderid'
                    render={(routerProps)=>
                        <FolderOfNotes
                        folder={this.props.folders.find(folder=>folder.id===routerProps.match.params.folderId)}
                        />}
                    />
                </ul>
            </div>
        )
    }
}