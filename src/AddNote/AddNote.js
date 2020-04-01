import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError/ValidationError';

class AddNote extends Component {
    static contextType= NotefulContext;
    constructor(props){
        super(props);
        this.noteName = React.createRef();
        this.folder = React.createRef();
    }
    state = {
        note: {
            value: '',
            touched: false
        },
        folder: {
            value: null,
            touched: false
        }
    }
    updateNoteName(note) {
        this.setState({
                note: {
                    value: note,
                    touched: true
                }
        });
    }
    updateFolder(folder) {
        this.setState({
            folder:  {
                value: folder,
                touched: true
            }
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        const note = this.noteName.current.value;
        const folder = this.folder.current.value;
        console.log(note, folder);
        this.addNote(note,folder);
    }
    validateNote = () => {
        const note = this.state.note.value.trim();
        console.log(note)
        if(note.length === 0) {
            return 'Please enter a note name';
        } 
    }
    validateFolder = () => {
        const folder = this.state.folder.value;
        if(folder === null){
            return 'Please select a folder'
        } 
    }

    addNote = (noteName, folder) => {
        console.log('adding note')
    }
    render(){
        const noteError = this.validateNote();
        console.log(noteError)
        const folderError = this.validateFolder();
        return(
            <form className="add-note" onSubmit={this.handleSubmit}>
                <label htmlFor="note-name" id="note-name">Name:</label>
                    <input type="text" 
                    name="note-name" 
                    id="note-name" 
                    ref={this.noteName} 
                    defaultValue="Folder Name" 
                    onChange={e=>this.updateNoteName(e.target.value)}>
                    </input>
                    {this.state.note.touched && (<ValidationError message={noteError}/>)}
                <label htmlFor="selectFolder" id="selectFolder">Folder:</label>
                    <select name="selectFolder" 
                    id="selectFolder" 
                    ref={this.folder} 
                    onChange={e=>this.updateFolder(e.target.value)}>
                        <option value={null}>Select Folder:</option>
                        {this.context.folders.map(folder=> {
                        return <option key={folder.id} 
                        id={folder.id} 
                        value={folder.id}>
                        {folder.name}</option>
                        }
                        )}
                    </select>
                <button type="submit" id="submit" disabled = {
                    this.validateNote() ||
                    this.validateFolder()
                }>Submit</button>
            </form>
        )
    }
}

export default AddNote;