import React, {Component} from 'react'
import {Route } from 'react-router-dom'
import SideBarMain from '../SideBarMain/SideBarMain'
import NoteSideBar from '../NoteSideBar/NoteSideBar'
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
                {/* <Route
                    path='/folder/:folderid'
                    render={(routerProps)=>
                        <FolderOfNotes
                        folder={this.props.folders.find(folder=>folder.id===routerProps.match.params.folderId)}
                        />}
                    /> */}
                    < Route 
                        path ='/note/:noteId'
                        render={(routerProps)=>
                            {const matchingNote= this.props.notes.find(note=>note.id===routerProps.match.params.noteId);
                            console.log(matchingNote);
                            const matchingFolder = this.props.folders.find(folder=>folder.id===matchingNote.folderId)
                            return (
                                <NoteSideBar 
                                folder={matchingFolder}
                                />
                            )
                        }
                            // console.log(routerProps.match.params)
                            // <NoteSideBar 
                            // folder={this.props.folders.find(folder=>folder.id===this.props.notes.find(note=>note.id===routerProps.match.params.noteId).folderId)}
                            // />
                        }
                            />
                </ul>
            </div>
        )
    }
}