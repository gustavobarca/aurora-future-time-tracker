import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import App from './pages/App';
import Settings from './pages/Settings';
import AddProject from './pages/AddProject';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/projects/add" component={AddProject}/>         
      </Switch>
    </BrowserRouter>
  )
}
