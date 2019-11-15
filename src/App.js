import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from "./Components/Home.js";
import Practice from "./Components/PracticeAreas";
import NoMatch from "./Components/NoMatch";
import Contact from "./Components/Contact.js";
import Resources from "./Components/Resources.js";
// import { Container, } from "semantic-ui-react"
// import Navbar from "./Components/NavBar.js";
import './App.css';

const App = () => (
 <>
  
    <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/practice' component={Practice} />
     <Route exact path='/contact' component={Contact} />
     <Route exact path='/resources' component={Resources} />
     <Route component={NoMatch} />
   </Switch>
 
 </>
)

export default App;
