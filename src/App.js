import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={}/>
        <Route exact path='/add' component={}/>
        <Route exact path='/edit/:id' component={}/>
        <Route path='/' component={}/>
      </Switch>
    </div>
  );
}

export default App;
