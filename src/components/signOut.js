import React from 'react';
import {Component} from 'react'

export default class SignOut extends Component{
   componentDidMount(){
    localStorage.removeItem("jwt");
    window.location.href = "http://localhost:3000/login";
   }
}