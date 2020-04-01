import React, {Component} from 'react';
import Folder from '../Folder/Folder'
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom';
import ListError from '../ListError/ListError'

class SideBarMain extends Component {
    render() {
        const routerProps = this.props.match.params
        return(
        <ListError>
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
                        routerProps= {routerProps}
                        />)
                        })
                    }   
                </div>
                <Link to='/add-folder'><button className="add-folder">Add Folder</button></Link>
        </div>
        )}
        </NotefulContext.Consumer>
        </ListError>
        )
    }
}

export default SideBarMain;