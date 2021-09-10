import React from 'react';
import './style/CSS/App.css';
import Home from './views/Home';
import Search from './views/Search';
import Event from './views/Event';
import Favorites from './views/Favorites';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/search' component={Search} />
          <Route path='/event' component={Event} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
