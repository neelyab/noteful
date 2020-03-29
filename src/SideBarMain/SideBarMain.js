import React, {Component} from 'react';
import Folder from '../Folder/Folder'
import NotefulContext from '../NotefulContext'

class SideBarMain extends Component {
    render() {
        return(
        <NotefulContext.Consumer>
            {(context)=>(  
            <div>
                <div>
                    {context.folders.map(folder=> {
                        return (
                        <Folder key={folder.id} 
                        folderId={folder.id}
                        link={`/folder/${folder.id}`}
                        className='folder'
                        name={folder.name}
                        />)
                        })
                    }   
                </div>
            <button className="add-folder">Add Folder</button>
        </div>
        )}
        </NotefulContext.Consumer>
        )
    }
}

export default SideBarMain;