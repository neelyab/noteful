import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddFolder from './AddFolder'


const state = {
    error: null
};
const folderName = 'name';

describe('component addfolder',()=>{
it('renders to UI as expected', ()=>{
    const tree = renderer.create(
        <AddFolder state={state} folderName={folderName}/>
    ).toJSON()
    expect(tree).toMatchSnapshot();

})
})