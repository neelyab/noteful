import React from 'react'

const NotefulContext = React.createContext({
    folders:[],
    notes:[],
    addFolder: ()=>{},
    deleteNote: ()=>{},
    deleteFolder: ()=>{},
    addNote: ()=>{}
})

export default NotefulContext;