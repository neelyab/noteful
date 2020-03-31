import React, {Component} from 'react';
import Folder from '../Folder/Folder'
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom';

class SideBarMain extends Component {
    render() {
        console.log(this.props.match.params)
        const routerProps = this.props.match.params
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
                        routerProps= {routerProps}
                        />)
                        })
                    }   
                </div>
                <Link to='/add-folder'><button className="add-folder">Add Folder</button></Link>
        </div>
        )}
        </NotefulContext.Consumer>
        )
    }
}

export default SideBarMain;