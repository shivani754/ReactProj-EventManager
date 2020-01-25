import React,{Component} from 'react';
import '../cards.css';
import {Link} from 'react-router-dom';
//import $ from 'jquery';
export default class Cards extends Component{
    render(){
        const events=this.props.events;
        console.log("**");
        var desc=events.description.substring(0,50);
        console.log(events.description.substring(0,50));
        return(
        <div className="col-md-6 col-lg-3" id="card1">
            <div className="card" style={{minHeight:"99%%",border: "2px solid rgb(136, 130, 130)", boxShadow: "rgb(197, 184, 184) 2px 2px 2px 2px",color: "black"}} >
                <img src={events.imgUrl} className="card-img-top" alt="..." style={{height:"20vw"}}/>
                <div className="card-body" id="card1-body">
                      <p className="contP">{events.fname}</p><br/>
                      <p className="card-text"style={{fontSize:"1vw",color:"black"}}>{desc}....</p>
                      <p className="card-text"style={{fontSize:"1vw",color:"black"}}>{events.estartdate}-{events.eenddate}</p>
                      <p className="card-text"style={{fontSize:"1vw",color:"black"}}>{events.city}</p>
                </div>
                <div className="card-img-overlay" id="cardOverlay">
                         <button className="tickBtn" onClick={()=>this.props.selectedEvent(events)}>
                             <Link to="/booking" style={{textDecoration:"none",color:"white",fontSize:"1.5vw"}}>
                                 {events.efee}</Link></button>
                         {/* <button className="tickBtn1">Register Now</button> */}
                 </div>
            </div>
            </div>
            
        )
    }
}