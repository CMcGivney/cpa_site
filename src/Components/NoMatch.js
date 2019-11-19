import React from 'react';
import { Link, } from 'react-router-dom';


const NoMatch = () => (
  <h3 className="button">
    Page not found return
    <Link className="button" to="/"> Home</Link>
  </h3>
)



export default NoMatch;