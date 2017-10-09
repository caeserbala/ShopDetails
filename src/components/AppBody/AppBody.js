import React from 'react';
import Slider from './slides/slides';
import { Switch, Route } from 'react-router-dom';
import CarDetails from './CarDetails';
import Cars from './Cars';
const AppBody = () => (
    <div > 
    <Switch>
      <Route exact path='/' component={Slider}/>
      <Route exact path='/cars' component={Cars}/>
      <Route  path='/cars/:modelID' component={CarDetails}/>
    </Switch>
    </div>
);

export default AppBody;