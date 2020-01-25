import React,{Component} from 'react';

export default class ShowCart extends Component{
    
    constructor(props){
        super(props);
        this.state=

        {
            cartEvents:[],
            events:[]
        }
    }
    getCart(id){
        fetch(` http://localhost:5000/user/getCart`, {
            method: "GET",
            headers:{  "Content-Type":"application/json",
            "x-auth-token":JSON.parse(localStorage.getItem("jwt")).token  },
        })
      .then(res => {return res.json()})
      .then(res => {
            console.log(res.cart);
           this.setState({cartEvents:res.cart},()=>{
            console.log(`The cart events are : ${this.state.cartEvents}`)
            this.state.cartEvents.map((eveId)=>
                fetch(`http://localhost:5000/event/getEve?eveId=${eveId}`)
                .then(res=>res.json())
                .then(res=>{
                    console.log(res)   
                    this.setState({
                        events: [...this.state.events,res],
                    },()=>{
                        console.log(this.state.events)
                    })
                //    this.state.events.push(res)
                })
            )

           });
                    }
          )
           

    }
    componentDidMount(){
this.getCart();
    }
    render()
    {
        return(
        <div>
            {
            this.state.events.filter((event)=>{
                console.log(event)
                return event !=null;
            }).map((event)=>{
                console.log(event)
             return  <div style={{backgroundColor: "#ffff80"}}>
                     <div className="card text-center">
                         <div className="card-header">
                            My Cart
                         </div>
                         <div className="card-body">
                             <h5 className="card-title">{event.fname}</h5>
                             <img style={{height:"20vw",width:"20vw"}}src={event.imgUrl} alt="not available"></img>
                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                         
                         </div>
                         <div className="card-footer text-muted">
                            2 days ago
                         </div>
                     </div>
                </div>}
                )     }
        </div>
    )
  }
}