import React,{Component} from 'react';
import '../signUp.css';
import {Link} from 'react-router-dom';
export default class SignUp extends Component{
    constructor(){
        super();
        this.state={
            users:[],
            emailId:"",
            password:"",
            phone:"",
            fname:"",
            lname:"",
            rem:"",
            msg:""

        }
        this.add=this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        fetch('http://localhost:5000/user/') 
        .then(res=>res.json())
        .then(res=>{this.setState({users:res})})
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,//#dynamic keys..
        })
    }
    add(e)
    {
        let data = {...this.state};
        delete data.users;
        console.log(data);
        console.log("**");
        e.preventDefault();
        this.state.users.push(data);
        fetch('http://localhost:5000/user/add',//add
      {
        method: "POST",
          headers:{  "Content-Type":"application/json",  },
            body:JSON.stringify(data),
      } )
      .then( res => {
            
              return res.json() 
        } )
      .then( res => {
          if(res.resType===0)
           this.setState({msg:"*User already exits..try with another email id*"})
           else 
           {
            this.setState({msg:""});
            window.location.href = "http://localhost:3000/login";
           }
      
        } )
        this.setState({
            emailId:"",
            password:"",
            phone:"",
            fname:"",
            lname:"",
            rem:""
        })
    }
    render(){
        return(
      <div className="loginCss">
          <div className="mx-auto border border-warning rounded p-4 pl-5 m-4 w-50">
          <p id="showMsg" style={{color:"black"}}>{this.state.msg}</p>
         <form onSubmit={(e)=>{this.add(e)}}>
            <div className="row" style={{color:"teal"}}>
                <div className="col">
                    <input type="text" name="fname" className="form-control w-75" placeholder="First name"onChange = {this.handleChange} value={this.state.fname}required/>
                </div>
                <div className="col">
                    <input type="text" name="lname"className="form-control w-75" placeholder="Last name"onChange = {this.handleChange}value={this.state.lname} />
                </div>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control w-75" name="emailId"id="exampleInputEmail1" aria-describedby="emailHelp"onChange = {this.handleChange} value={this.state.emailId}/>
            </div>
            <div className="form-group">
                <label >Phone</label>
                <input type="text" name="phone"className="form-control w-75" value={this.state.phone}onChange = {this.handleChange}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password"className="form-control w-75" id="exampleInputPassword1"onChange = {this.handleChange} value={this.state.password}/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"name="rem" onChange = {this.handleChange}value={this.state.rem}/>
                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
            </div>
            <input type="submit" className="btn btn-primary w-25" value="Sign Up"/>
            <small id="passwordHelpInline" >Already have an account?<Link to="/login" style={{color:"blue"}}>Login</Link></small>
        </form>
        </div>
        </div>
        )
    }
}
