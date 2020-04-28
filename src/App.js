import React, {Component} from 'react';

import './App.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom'
import NotefulContext from './NotefulContext';
import SideBarMain from './SideBarMain/SideBarMain';
import NoteSideBar from './NoteSideBar/NoteSideBar';
import MainPage from './MainPage/MainPage';
import FolderOfNotes from './FolderOfNotes/FolderOfNotes';
import DetailOfNote from './DetailOfNote/DetailOfNote';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import config from './config'


const folderUrl=`${config.API_ENDPOINT}/api/folders`;
const notesUrl=`${config.API_ENDPOINT}/api/notes`;

class App extends Component {

    constructor(props){
      super(props);
      this.state ={
         folders:[],
         notes:[],
         error: null
      }
    }

    componentDidMount(){
  //fetch folders
     Promise.all([
       fetch(folderUrl), 
       fetch(notesUrl)
      ])
      .then(([folderRes, notesRes]) => {
        if(!folderRes.ok) 
         return folderRes.json().then(e => Promise.reject(e));
        if(!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));

        return Promise.all([folderRes.json(), notesRes.json()]);
        })
      .then(([folders, notes]) => {
        this.setState({notes, folders});
      })
      .catch(error => {
        console.error({error});
        this.setState({
          error: error
        })
      });
    }

     addFolder=folder=>{
          this.setState({folders: [...this.state.folders, folder],})
     }

      deleteNote = noteId => {
        const id = Number(noteId)
        const newNotes = this.state.notes.filter(note=>note.id !== id)
        this.setState({notes: newNotes})
      }

      deleteFolder= folderid=> {
        const id = Number(folderid);
        const newFolders = this.state.folders.filter(folder=>folder.id !== id);
        this.setState({folders: newFolders})
      }
      addNote = note => {
        this.setState({
          notes: [...this.state.notes, note]
        })
      }
      render() {
        const contextValue = {
          folders: this.state.folders,
          notes: this.state.notes,
          addFolder: this.addFolder,
          deleteNote: this.deleteNote,
          deleteFolder: this.deleteFolder,
          addNote: this.addNote
          }
        return (
          <main className='App'>
            <div className="main-container">
              <header className='header'>
                <h1 className='noteful'>
                <Link to='/'>Noteful</Link></h1>
              </header>
            <div className="body">
              <NotefulContext.Provider 
              value={contextValue}>
                <div className="sidebar">
                      <ul>
                      <Route 
                          exact path='/'
                          component={SideBarMain}
                      />
                      <Route
                          path='/folder/:folderid'
                          component={SideBarMain}
                      />
                      <Route 
                          path='/note/:noteId'
                          component={NoteSideBar}
                          />
                             <Route
                          path='/add-folder'
                          component={NoteSideBar}
                          />
                             <Route
                          path='/add-note'
                          component={NoteSideBar}
                          />
                      </ul>
                  </div>
                  <div className="main-content">
                      <ul className ="main-note-list">
                      <Route 
                          exact path='/'
                          component={MainPage}
                      />
                      <Route
                          path='/folder/:folderid'
                          component={FolderOfNotes}
                          />
                      <Route
                              path='/note/:noteId'
                            component={DetailOfNote}
                              />
                      <Route
                          path='/add-folder'
                          component={AddFolder}
                          />
                      <Route
                          path='/add-note'
                          component={AddNote}
                          />
                        </ul>
                  </div>
                  {this.state.error && (<div>Something went wrong. Please try again later.</div>)}
                </NotefulContext.Provider>
              </div>
            </div>
          </main>
        );
      }
}

export default App;