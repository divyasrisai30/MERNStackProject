import React from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import Users from './User/Pages/Users';
import NewPlaces from './Places/Pages/NewPlaces';
import Mainavigation from './Shared/Navigation/MainNavigation';
import MainHeader from './Shared/Navigation/MainHeader';

function App() {
  return (

    
    <main>
    <Router>
      <Mainavigation></Mainavigation>
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
    </main>
    
  )

  
}

export default App;
