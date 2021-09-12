import React from 'react';
import './style/CSS/App.css';
import Home from './views/Home';
import Search from './views/Search';
import Event from './views/Event';
import Favorites from './views/Favorites';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Errors from './views/Errors';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/search' component={Search} />
          <Route path='/event' component={Event} />
          <Route path='/favorites' component={Favorites} />
          <Route component={Errors} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
