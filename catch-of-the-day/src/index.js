// let's go!
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Match,Miss} from 'react-router';

import './css/style.css';

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import App from './components/App';

//const repo = `/${window.location.pathname.split('/')[1]}`;
const Root = () => {
    return (
        <BrowserRouter >
            <div>
                <Match exactly pattern="/" component={StorePicker}></Match>
                <Match exactly pattern="/store/:storeId" component={App}></Match>
                <Miss component={NotFound}></Miss>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>,document.querySelector('#main'));
