import React,{Component} from 'react';
import '../addToCart.css';

export default class AddToCart extends Component{
  
    state = {
        cartEvents:[],
        events:[]
    }
    componentDidMount(){
        var userId=JSON.parse(localStorage.getItem("jwt")).user.id;
        
        const url = `http://localhost:5000/user/addToCart?userId=${userId}`;
             //   console.log(JSON.parse(localStorage.getItem("jwt")).token );
                  console.log(this.state.cartEvents);
                fetch(url,
                {
                    method: "PUT",
                    headers:{  "Content-Type":"application/json",
                    "x-auth-token":JSON.parse(localStorage.getItem("jwt")).token  },
                    body:JSON.stringify({id:this.props.eve._id}),
                } )
               .then( res => {
                   if(res.ok)
                      return res.json()
                    } )
                .then( res => {
                    console.log(JSON.stringify(res));
                    window.location = '/showCart';
                    } )
                   
    }
    
   render(){
       return(
           <div></div>
       )
   }
   
   
}