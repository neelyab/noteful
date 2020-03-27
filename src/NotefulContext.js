import React from 'react'

const NotefulContext = React.createContext({
    folders:[],
    notes:[],
    addFolder: ()=>{},
    deleteNote: ()=>{}
})

export default NotefulContext;