import React, {Component} from 'react';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';
import './App.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom'
import NotefulContext from './NotefulContext';
import SideBarMain from './SideBarMain/SideBarMain'
import NoteSideBar from './NoteSideBar/NoteSideBar'
import MainPage from './MainPage/MainPage'
import FolderOfNotes from './FolderOfNotes/FolderOfNotes'
import DetailOfNote from './DetailOfNote/DetailOfNote'
import AddFolder from './AddFolder/AddFolder'
import AddNote from './AddNote/AddNote'


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
        console.log(notes,folders)
        this.setState({notes, folders});
      })
      .catch(error => {
        console.error({error});
      });
    }

     addFolder=folder=>{
       console.log(folder)
          this.setState({folders: [...this.state.folders, folder],})
     }

      deleteNote = noteId => {
        const newNotes = this.state.notes.filter(note=>note.id !== noteId)
        this.setState({notes: newNotes})
      }

      deleteFolder= folderId=> {
        const newFolders = this.state.folders.filter(folder=>folder.id !== folderId);
        this.setState({folders: newFolders})
      }

      render() {
        const contextValue = {
          folders: this.state.folders,
          notes: this.state.notes,
          addFolder: this.addFolder,
          deleteNote: this.deleteNote,
          deleteFolder: this.deleteFolder,
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
                          path='/folder/:folderId'
                          component={SideBarMain}
                      />
                      <Route 
                          path='/note/:noteId'
                          component={NoteSideBar}
                          />
                          <Route
                              path='/add-folder'
                              component={SideBarMain}
                              />
                      </ul>
                  </div>
              
                  <div className="main-content">
                      <ul>
                      <Route 
                          exact path='/'
                          component={MainPage}
                      />
                      <Route
                          path='/folder/:folderId'
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
                </NotefulContext.Provider>
              </div>
            </div>
          </main>
        );
      }
}

export default App;