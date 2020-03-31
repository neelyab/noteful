import React, {Component} from 'react';
import NotefulContext from '../NotefulContext'

class AddNote extends Component {
    static contextType= NotefulContext;
    handleSubmit= e =>{
        e.preventDefault();
        this.validateForm(e.target.noteName.value)
    }
    validateForm = input =>{
        if(input === ''){
            alert('Please enter at least one character for the folder name.')
        }
    }
    render(){
        return(
            <form className="add-note" onSubmit={this.handleSubmit}>
                <label htmlFor="note-name" id="note-name">Name:</label>
                <input type="text" name="noteName" id="note-name"></input>
                <label htmlFor="select-folder" id="select-folder">Folder:</label>
                <select>
                {this.context.folders.map(folder=> {
                   return <option id={folder.id} value={folder.id}>{folder.name}</option>
                }
                    )}
                </select>
                <button type="submit" id="submit">Submit</button>
            </form>
        )
    }
}

export default AddNote;