import React from 'react';
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import searchIcon from './search-icon.png';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    constructor()
    {
      super();
      let u="Name"
      try{
        u =  JSON.parse(localStorage.getItem("jwt")).user.name;
      }catch(e){
          u=""
      }
      this.state={name:u}
    }
    render()
    {
        return(
            <div className="container fluid" style={{maxWidth: "100%",fontSize:"1.2vw"}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
      <img src={logo} height="39vh" alt="not available"></img>
  </a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
   
      <li className="nav-item ">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/signUp">SignUp</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/add">Create Event</Link>
      </li>
    </ul>
  </div>
  {/* <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm"> 
  <i class="fa fa-sign-in"></i></a> */}
  <Link className="navbar-brand" to="/signOut">
    <i class="fa fa-sign-in"></i>
  </Link> &nbsp;&nbsp;
  <div>
  <i class="fa fa-user" aria-hidden="true"></i>
   <span style={{color:"black"}}>{this.state.name}</span> 
   &nbsp;&nbsp;
  </div>
  <Link className="navbar-brand" to="/showCart">
      <img src={searchIcon} height="39vh"alt="not available"></img>
  </Link>
</nav>
        </div>
        )
    }
}
export default Navbar;