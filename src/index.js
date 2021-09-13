import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>, 
    document.getElementById('root')
);
/* 
if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDom.render(
            <Router>
                <React.StrictMode>
                    <NextApp />
                </React.StrictMode>
            </Router>, 
    document.getElementById('root')
        )
    });
} */