import React, {Component} from 'react';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';
import './App.css';
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext';


const folderUrl="http://localhost:9090/folders";
const notesUrl="http://localhost:9090/notes";

class App extends Component {
    constructor(props){
      super(props);
      this.state ={
         folders:[],
         notes:[],
    
      }
    }
    componentDidMount(){
  //fetch folders
      fetch(folderUrl)
      .then(response => {
        if(!response.ok) {
          console.log('an error occured');
         throw new Error('something went wrong');
        }
        return response
        })
      .then(response=>response.json())
      .then(data=>
        this.setState({
          folders: data,
        })
        );
//fetch notes
        fetch(notesUrl)
      .then(response => {
        if(!response.ok) {
          console.log('an error occured');
         throw new Error('something went wrong');
        }
        return response
        })
      .then(response=>response.json())
      .then(data=> {
        console.log(data);
        this.setState({
          notes: data,
        })
      }
        )
    }  
    // handleBack() {
    //     this.props.history.push('/')
    //   }
     addFolder(){

      }
      deleteNote = noteId => {
        const newNotes = this.state.notes.filter(note=>note.id !== noteId)
        this.setState({
          notes: newNotes
        })
      }
      render() {

        const contextValue = {
          folders: this.state.folders,
          notes: this.state.notes,
          addFolder: this.addFolder,
          deleteNote: this.deleteNote,
          }
  return (
    <main className='App'>
      <div className="main-container">
        <header className='header'>
          <h1 className='noteful'><Link to='/'>Noteful</Link></h1>
        </header>
      <div className="body">
        <NotefulContext.Provider 
        value={contextValue}>
          <SideBar
          folders={this.state.folders}
          notes={this.state.notes}
          />
          <Main
          notes={this.state.notes}
          />
          </NotefulContext.Provider>
        </div>
      </div>
    </main>
  );
  }
}

export default App;