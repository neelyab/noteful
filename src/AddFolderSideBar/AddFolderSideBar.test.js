import React from 'react';
import ReactDOM from 'react';
import AddFolderSideBar from './AddFolderSideBar';
import renderer from 'react-test-renderer';


describe('Add Folder Side Bar', ()=>{
    it('renders to UI as expected', ()=>{
        const tree = renderer.create(<AddFolderSideBar/>).toJSON
        expect(tree).toMatchSnapshot();
    })
})