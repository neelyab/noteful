import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom'

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
   });
   