import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import App from './pages/App';
import Settings from './pages/Settings';
import AddProject from './pages/AddProject';
import MapSections from './pages/MapSections';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/add-project" component={AddProject}/>        
        <Route exact path="/map-sections/:projectGid" component={MapSections}/>        
      </Switch>
    </BrowserRouter>
  )
}
