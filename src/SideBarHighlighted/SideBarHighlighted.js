import React, {Component} from 'react'
import Folder from '../Folder/Folder'
import  './SideBarHighlighted.css'
import NotefulContext from '../NotefulContext'

class SideBarHighlighted extends Component {
    static contextType= NotefulContext;
    render(){

//finds the folder to highlight
        const folderToHighlight = this.context.folders.find(folder=>folder.id===this.props.match.params.folderId);
        console.log(folderToHighlight);

//adds highlighted class to folder that needs to be highlighted and maps over all of them to return folder components //
        const folders =   this.context.folders.map(folder=>
            <Folder key={folder.id} 
            folderId={folder.id}
            className={folder.id === folderToHighlight.id ? 'folder highlighted' : 'folder'}
            link={`/folder/${folder.id}`} 
            name={folder.name}
            /> )
        return (
            <div>
            <div>{folders}</div>
            <button className="add-folder">Add Folder</button>
         </div>
        )
    }
}
export default SideBarHighlighted;