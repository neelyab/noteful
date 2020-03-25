import React, {Component} from 'react';
import Folder from '../Folder/Folder'

class SideBarMain extends Component {
    render() {
        return(
            this.props.folders.map(folder=>

                <Folder key={folder.id} 
                folderId={folder.id}
                link={`/folder/${folder.id}`} 
                name={folder.name}
                />
                )
        )
    }
}

export default SideBarMain;