import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import App from './pages/App';
import Settings from './pages/Settings';


export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/settings" component={Settings}/>      
      </Switch>
    </BrowserRouter>
  )
}
