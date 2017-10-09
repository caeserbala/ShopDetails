import React from 'react';
import  style from "./Nav-Header.css";

const NavHeader = () => (
<div>
<nav className="navbar navbar-default">
<div className="container">

<div className="navbar-header">
<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
  <span className="sr-only">Toggle navigation</span>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
</button>

</div> 


  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
   
    <ul className="nav navbar-nav">
      <li><a className="fontsizechanged" href="#">| Francias |</a></li>
      <li><a className="fontsizechanged" href="#">Directory |</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="#"><i className="fa fa-youtube-square" aria-hidden="true"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
    </ul>
  </div>
</div>
</nav>
</div>

);

export default NavHeader;