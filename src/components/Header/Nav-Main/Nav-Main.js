import React from 'react';
import Style from './Nav-Main.css';
import { Link } from 'react-router-dom'


const NavMain = ()=> (
<nav className="navbar-main">
<div className="container">
    <div className="row header-banner">
        <div className="col-md-4 header-left">
            <a className="header-banner-txt">Welcome to Renault Digital</a>
        </div>
        <div className="col-md-4 header-left"></div>
        <div className="col-md-4 header-right">
            <a href="https://group.renault.com/en/" title="" className="header-logo-group">
              Groupe <span className="header-logo-group-span">Renault</span>
            </a>
          </div> 
    </div>
    <div className="row header-mobile-menu">
        <div className="col-md-8 ">
            <ul className="nav navbar-nav">
                <li><a className="nav-main-menu-item"><Link to='/'><i className="fa fa-home" aria-hidden="true"></i></Link></a></li>
                <li><a className="nav-main-menu-item"><Link to='/cars'>Our Vehicles</Link></a></li>
                <li><a className="nav-main-menu-item"><Link to='/image'> Images</Link></a></li>
                <li><a className="nav-main-menu-item"><Link to ='/video'>Video</Link></a></li>
            </ul>  
        </div>
        <div className="col-md-4 ">

        </div>
    </div>
</div>
</nav>
);

export default NavMain;