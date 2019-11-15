import React from 'react';
import { Link, } from 'react-router-dom';


const NoMatch = () => (
  <h3 textAlign="center">
    Page not found return
    <Link to="/"> Home</Link>
  </h3>
)



export default NoMatch;