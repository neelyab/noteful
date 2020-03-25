import React, {Component} from 'react'
import {Route } from 'react-router-dom'
import SideBarMain from '../SideBarMain/SideBarMain'
import NoteSideBar from '../NoteSideBar/NoteSideBar'
import SideBarHighlighted from '../SideBarHighlighted/SideBarHighlighted'
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
                    path='/folder/:folderId'
                    render={(routerProps)=> {
                        const folderToHighlight = this.props.folders.find(folder=>folder.id===routerProps.match.params.folderId);
                        console.log(folderToHighlight);
                            return (
                            <SideBarHighlighted
                            folder={folderToHighlight}
                            allFolders={this.props.folders}
                            />
                            )
                        }
                    }
                 />
                    < Route 
                        path ='/note/:noteId'
                        render={(routerProps)=> {
                            const matchingNote= this.props.notes.find(note=>note.id===routerProps.match.params.noteId);
                            console.log(matchingNote);
                            const matchingFolder = this.props.folders.find(folder=>folder.id===matchingNote.folderId)
                            return (
                                <NoteSideBar 
                                folder={matchingFolder}
                                />
                                )
                            }
                         }
                    />
                </ul>
            </div>
        )
    }
}