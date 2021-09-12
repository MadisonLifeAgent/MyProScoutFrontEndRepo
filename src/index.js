import React from "react";
import reactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

reactDom.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>, 
    document.getElementById('root')
);