import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';

// main component
function App() {
    return (
        <div className="App">
            <h3>MyProScout</h3>
            <Switch>
                <Route path="/" /* exact component={Home}  *//>
{/*                 <Route path="/about" component={About} />
                <Route path="/list" component={List} /> */}
            </Switch>
        </div>
    );
}

export default App;