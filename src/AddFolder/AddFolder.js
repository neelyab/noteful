import React, {Component} from 'react';
import NotefulContext from '../NotefulContext'
import {v4 as uuidv4} from 'uuid';
import './AddFolder.css'
import config from '../config'

const folderUrl=`${config.API_ENDPOINT}/api/folders`;

class AddFolder extends Component {
    static contextType = NotefulContext;

    constructor(props){
        super(props);
        this.folderName= React.createRef();
        
    }
    state= {
        error: null
    }
    addNewFolder = folder =>{
        const newFolder = {
            id: uuidv4(),
            folder_name: folder

        }
        fetch(folderUrl,
            {
            method: 'POST',
            body: JSON.stringify(newFolder),
            headers: {
                'content-type': 'application/json'
            }

            })
        .then(res=>
            { if(!res.ok){
                return res.json().then(err=> {
                    throw err
                })
            } 
            return res.json()
            })
            .then(data=>{
                this.context.addFolder(data)
                this.props.history.push('/')
            })
            .catch(error=> {
                console.log(error)
                this.setState({
                    error: error
                })
            })
    }
  
    handleSubmit=e=>{
        e.preventDefault();
        const folderName=this.folderName.current.value;
        if (folderName === ''){
            alert('please add a folder name')
        }else {
           this.addNewFolder(folderName)
        }
    }
    render(){
        const {error} = this.state
        return(
            <div className="add-new-folder">
                <form className="add-folder-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="folder-name" id="folder-name">Enter the folder name:</label>
                    <input type="text" name="folder-name" id="folder-name" ref={this.folderName} defaultValue="Folder Name"></input>
                    {error && <p>{error.message}</p>}
                    <button type="submit" id="folder-submit">Submit</button>     
                    <button type="button" className="back" onClick = {()=>this.props.history.push('/')}>Cancel</button>               
                </form>
            </div>
        )
    }
}

export default AddFolder;