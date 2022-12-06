import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from './containers/MainPage';
import AddItemPage from './containers/AddItemPage';
import EditItemPage from './containers/EditItemPage';
import PageNotFound from './containers/PageNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/add' component={AddItemPage}/>
        <Route exact path='/edit/:id' component={EditItemPage}/>
        <Route path='/' component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
