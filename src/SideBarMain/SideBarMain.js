import React, {Component} from 'react';
import Folder from '../Folder/Folder'

class SideBarMain extends Component {
    render() {
        const folders = this.props.folders.map(folder=>
            <Folder key={folder.id} 
            folderId={folder.id}
            link={`/folder/${folder.id}`}
            className='folder'
            name={folder.name}
        />) 
        return(
        <div>
           <div>{folders}</div>
           <button className="add-folder">Add Folder</button>
        </div>
        )
    }
}

export default SideBarMain;