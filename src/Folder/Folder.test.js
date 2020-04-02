import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Folder from './Folder'
import NotefulContext from '../NotefulContext';
import {BrowserRouter} from 'react-router-dom'

describe('folder component', ()=> {
  
const routerp =  {"folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
"name": "Important"}

const folders = [
    {
      "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Important"
    },
    {
      "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Super"
    },
    {
      "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Spangley"
    }
  ];

it('renders to UI as expected', ()=> {

const tree = renderer.create(
  <BrowserRouter>
<NotefulContext.Provider value={{folders}}>
    <Folder routerProps={routerp} folderId="b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1" link='link' />
</NotefulContext.Provider>
</BrowserRouter>)
.toJSON()
expect(tree).toMatchSnapshot();
})
})