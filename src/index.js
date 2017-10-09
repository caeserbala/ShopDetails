import React from 'react';
import {render } from 'react-dom';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';


render(( 
    <BrowserRouter>
    <App />
     </BrowserRouter>
), document.querySelector("#root"));

