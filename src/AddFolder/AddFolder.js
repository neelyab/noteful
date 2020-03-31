import React, {Component} from 'react';
import NotefulContext from '../NotefulContext'

const folderUrl="http://localhost:9090/folders";

class AddFolder extends Component {
    static contextType = NotefulContext;

    constructor(props){
        super(props);
        this.folderName= React.createRef();
        this.addNewFolder = this.addNewFolder.bind(this)
        
    }
    state= {
        error: null
    }
    addNewFolder = folder =>{
        const newFolder = {
            id: Math.floor(Math.random() * 100).toString(),
            name: folder

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
                console.log(res)
                return res.json().then(err=> {
                    throw err
                })
            } 
            return res.json()
            })
            .then(data=>{

                console.log(data);
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
        console.log(folderName);
        if (folderName === ''){
            alert('please add a folder name')
        }else {
           this.addNewFolder(folderName)
        }
    }
    render(){
        const {error} = this.state
        return(
            <div>
                <form className="add-folder" onSubmit={this.handleSubmit}>
                    <label htmlFor="folder-name" id="folder-name">Enter the folder name:</label>
                    <input type="text" name="folder-name" id="folder-name" ref={this.folderName} defaultValue="Folder Name"></input>
                    {error && <p>{error.message}</p>}
                    <button type="submit" id="folder-submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFolder;