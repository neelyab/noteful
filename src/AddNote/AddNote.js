import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError/ValidationError';
import {v4 as uuidv4} from 'uuid';
import './AddNote.css';
import NoteError from '../NoteError/NoteError';
import config from '../config'

class AddNote extends Component {
    static contextType= NotefulContext;
    constructor(props){
        super(props);
        this.noteName = React.createRef();
        this.folder = React.createRef();
        this.noteContent = React.createRef();
    }
    state = {
        note: {
            value: '',
            touched: false
        },
        folder: {
            value: 'selectFolder',
            touched: false
        },
        content: {
            value: '',
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
    updateContent(content){
        this.setState({
            content: {
                value: content,
                touched: true
            }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const note = this.noteName.current.value;
        const folder = this.folder.current.value;
        const content = this.noteContent.current.value;
        this.addNote(note, folder, content);
    }
    validateNote = () => {
        const note = this.state.note.value.trim();
        if(note.length === 0) {
            return 'Please enter a note name.';
        } 
    }
    validateFolder = () => {
        const folder = this.state.folder.value;
        if(folder === 'selectFolder') {
            return 'Please select a folder.'
        } 
    }
    validateContent = () => {
        const content = this.state.content.value;
        if (content.length === 0){
            return 'Please enter note content.'
        }
    }

    addNote = (noteName, folder, content) => {
        const newNote = {
            id: uuidv4(),
            note_name: noteName,
            modified: new Date(),
            folderid: folder,
            content: content
        }
        fetch(`${config.API_ENDPOINT}/api/notes`,{
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'content-type':'application/json'
            }
        })
        .then(res => {
            if(!res.ok){
            return res.json().then(err=> {
                throw err
            })
            }
            return res.json()
        })
        .then(data=> {
          this.context.addNote(data);
          this.props.history.push('/');
        })
        .catch(error=>
            console.log(error.message))

    }
    render(){
        const noteError = this.validateNote();
        const folderError = this.validateFolder();
        const noteContentError = this.validateContent();
        return(
            <NoteError>
            <form className="add-note-form" onSubmit={this.handleSubmit}>
                <label htmlFor="note-name" id="note-name">Name:</label>
                    <input type="text" 
                    name="note-name" 
                    id="note-name" 
                    ref={this.noteName} 
                    defaultValue="Note Name" 
                    onChange={e=>this.updateNoteName(e.target.value)}>
                    </input>
                    {this.state.note.touched && (<ValidationError message={noteError}/>)}
                <label htmlFor="selectFolder" id="selectFolder">Folder:</label>
                    <select name="selectFolder" 
                    id="selectFolder" 
                    ref={this.folder} 
                    onClick={e=>this.updateFolder(e.target.value)}>
                        <option value='selectFolder'>Select Folder:</option>
                        {this.context.folders.map(folder=> {
                        return <option key={folder.id} 
                        id={folder.id} 
                        value={folder.id}>
                        {folder.folder_name}</option>
                        }
                        )}
                    </select>
                    {this.state.folder.touched && (<ValidationError message={folderError}/>)}
                
                    <label htmlFor="note-content" id="note-content">Notes:</label>
                    <textarea type="text" 
                    name="note-content" 
                    id="note-content-input" 
                    ref={this.noteContent} 
                    defaultValue="Enter notes here..." 
                    onChange={e=>this.updateContent(e.target.value)}>
                    </textarea>
                    {this.state.content.touched && (<ValidationError message={noteContentError}/>)}
                <button type="submit" id="submit" disabled = {
                    this.validateNote() ||
                    this.validateFolder() ||
                    this.validateContent()
                }>Submit</button>
            </form>
            </NoteError>
        )
    }
}

export default AddNote;