import React from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import Users from './User/Pages/Users';
import NewPlaces from './Places/Pages/NewPlaces';
import Mainavigation from './Shared/Componets/Navigation/MainNavigation';
import MainHeader from './Shared/Componets/Navigation/MainHeader';
import UserPlaces from './Places/Pages/UserPlaces';
import  UpdatePlaces  from './Places/Pages/UpdatePlaces';

function App() {
  return (

    
    <main>
    <Router>
      <Mainavigation></Mainavigation>
          <Switch>
          <Route path="/" exact>
            <Users></Users>
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces></UserPlaces>
          </Route>
          <Route path="/places/new" exact>
            <NewPlaces/>
          </Route>
          {/* Caution: ORDER MATTERS. use this only after "/places/<something>" beacause "/places/:placeId" is a dynamic link which might be similar or confuse to "/places/<something>" link  */}
          <Route path="/places/:placeId">
            <UpdatePlaces/>
          </Route>
          <Redirect to="/"/>
          </Switch>
        </Router>
    </main>
    
  )

  
}

export default App;
