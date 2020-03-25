import React, {Component} from 'react'
import Folder from '../Folder/Folder'
import  './SideBarHighlighted.css'

class SideBarHighlighted extends Component {
    render(){
        console.log(this.props.folder);
        console.log(this.props.allFolders);
        const folder = this.props.folder

//finds the folder to highlight

        const highlightFolder = this.props.allFolders.find(f => f.id === folder.id);
        console.log(highlightFolder);

//adds highlighted class to folder that nees to be highlighted and maps over all of them to return folder components //
        const folders =   this.props.allFolders.map(folder=>
            <Folder key={folder.id} 
            folderId={folder.id}
            className={folder.id === highlightFolder.id ? 'folder highlighted' : 'folder'}
            link={`/folder/${folder.id}`} 
            name={folder.name}
            /> )
        return (
            <div>
            <div>{folders}</div>
            <button class="add-folder">Add Folder</button>
         </div>
        )
    }
}
export default SideBarHighlighted;