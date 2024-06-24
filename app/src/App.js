import React, {useState, useCallback} from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import Users from './User/Pages/Users';
import NewPlaces from './Places/Pages/NewPlaces';
import Mainavigation from './Shared/Componets/Navigation/MainNavigation';
import MainHeader from './Shared/Componets/Navigation/MainHeader';
import UserPlaces from './Places/Pages/UserPlaces';
import  UpdatePlaces  from './Places/Pages/UpdatePlaces';
import Auth from './User/Pages/Auth';
import { AuthContext } from './Places/Context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  })
  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  })
  let routes;

  if(isLoggedIn){
    routes= (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlaces />
        </Route>
        <Redirect to="/" />
        </Switch>
    )
  }else{
    routes= (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
        
          {/* Caution: ORDER MATTERS. use this only after "/places/<something>" beacause "/places/:placeId" is a dynamic link which might be similar or confuse to "/places/<something>" link  */}
      </Switch>
    )
  }
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout:logout}}>
    <Router>
      <Mainavigation></Mainavigation>
      <main>
          
           {routes}
          
          </main>
        </Router>
    </AuthContext.Provider>
    
  )

  
}

export default App;
