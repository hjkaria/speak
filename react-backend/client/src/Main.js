import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './Home';

import CreatePetition from './CreatePetition';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/create' component={CreatePetition}/>
    </Switch>
  </main>
);

export default Main;