import React from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import Users from './User/Pages/Users';
import NewPlaces from './Places/Pages/NewPlaces';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <Users></Users>
      </Route>
      <Route path="/places/new" exact>
        <NewPlaces/>
      </Route>
      <Redirect to="/"/>
      </Switch>
    </Router>
  )

  
}

export default App;
