import React,{Component} from 'react';
// import ReactModalLogin from 'react-modal-login';
// import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom';
export default class Login extends Component{
  constructor()
  {
    super();
    this.state={
      user:[],
      uname:"",
      emailId:"",
      password:"",
      isLogin:false,
      msg:''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  componentDidMount(){
    fetch('http://localhost:5000/auth/') 
    .then(res=>res.json())
    .then(res=>{this.setState({user:res})})
}

  handleChange(e){
    this.setState({
        [e.target.name]:e.target.value,
    })
  }
   check = (e)=>{
    // this.props.logIn=true;
    e.preventDefault();
    let data = this.state;
    //  console.log(data);
     
     fetch('http://localhost:5000/auth/add',{
       method:'POST',
       headers:{  "Content-Type":"application/json" },
       body:JSON.stringify(data)
     })
     .then( res =>  res.json())
      .then( res => {
        
          if(res.resType === 1){
            delete res.resType;
            localStorage.setItem("jwt", JSON.stringify(res));
           this.setState({isLogin:true});
           window.location.href = "http://localhost:3000/";
          }
          else 
          if(res.resType === 0){
            this.setState({
              msg:"*User Not Exist*",
            })
          }
          else{
            //-1
            this.setState({
              msg:"*Invalid Credentials*",
            })
            
          }
 
       })
       
   }
    render(){
        return(
          <div className="loginCss">
           <div className="mx-auto border border-warning rounded p-4 pl-5 m-4 w-50">
        <p id="showMsg" style={{color:"black"}}>{this.state.msg}</p>
             <form onSubmit={this.check}>
               <input className="form-control w-75" name="emailId" type="email" placeholder="Emailid"onChange = {this.handleChange}value={this.state.emailId} ></input><br></br>
               <input className="form-control w-75"name="password" type="password" placeholder="password"onChange = {this.handleChange}value={this.state.password} ></input><br></br>
               <input className="btn btn-info w-25" type="submit" value="LOGIN"></input>
               <small id="passwordHelpInline" >Don't have an account?<Link to="/signUp"style={{color:"blue"}}>SignUp</Link></small>
             </form>
             
           </div>
          </div>
        )  
    }
}