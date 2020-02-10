import React from 'react';
import './App.css';

import People from './scenes/people';
import Main from './scenes/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/'} exact>
            <Main />
          </Route>
          <Route path={'/people'} exact>
            <People />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
