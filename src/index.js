import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from "react-redux";

//pass in store from top component
ReactDom.render(
    <Router>
        <React.StrictMode>
            <Provider store={store}> 
                <App />
            </Provider>
        </React.StrictMode>
    </Router>, 
    document.getElementById('root')
);
