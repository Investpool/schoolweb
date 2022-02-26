import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="heading">
        <img src="images/crest2.PNG" alt="foto" height="60" width="90" />
        <strong>ABERFUL DA BASIC SCHOOL</strong></h1>
      <div className="links">
      <Link to="/"style={{marginRight:"15px"}}>Home</Link>
      <Link to="/academic"style={{marginRight:"15px"}}>Academic</Link>
      <Link to="/contact"style={{marginRight:"15px"}}>Contact</Link>
      <Link to="/gallery"style={{marginRight:"15px"}}>Gallery</Link>
      <Link to="/projects" style={{marginRight:"15px"}}>Projects</Link>
      <Link to="/yeargroups" style={{marginRight:"15px"}} >YearGroups</Link>
      </div>
    </div>
  );
}

export default Navbar;