import React,{Component} from 'react';
import eveImg from './event.png'
import '../booking.css';
import {Link} from 'react-router-dom';

export default class Booking extends Component{
    render(){
      //  console.log(this.props.event);
      const event=this.props.event;
      var desc=event.description.substring(0,40);
        return(
            <div className="container-fluid" id="div1">
                  <div className="row" >

                        <div className="col-5" style={{padding: "1vw"}} id="bookDiv2">
                            <img src={event.imgUrl} alt="not available" style={{width: "40vw",height: "25vw"}}></img>
                        </div>
                        <div className="col-7" id="bookDiv3">
                             <p className="fnameP">{event.fname}</p>
                             <p style={{fontSize: "1.5vw",fontWeight: "bold"}}>{event.university},{event.city},{event.state}</p>
                             <p style={{fontSize: "2vw",color: "#ffff00"}}>{event.estartdate}-{event.eenddate}</p>
                             <p style={{fontSize: "1.5vw",color: "#ffff00"}}>
                                  <img className="eveImg" src={eveImg} alt="not available" />&nbsp;{event.estarttime}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img className="eveImg" src={eveImg} alt="not available" />&nbsp;{event.eendtime}
                             </p>
                        </div>
                   </div>

                   <div className="row">
                         <div className="col-7" id="">
                              <p style={{fontSize: "2vw",color: "black"}}>EVENT DESCRIPTION:</p>
                              <p style={{fontSize: "1.5vw",color:"black"}}>{event.description}</p>
                          </div>
                          <div className="col-5" id="" >
                                <p style={{fontSize: "1.5vw"}}>Location:</p>
                               <iframe  style={{width:"100%"}}  ng-src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed"
                                    src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed">
                               </iframe>
                               <button type="button" class="btn btn-light"><Link to="/hotel" style={{fontSize:"1.5vw",color:"black"}}>Hotels near the location</Link></button>
                           </div>
                    </div>
                   <div className="row">
                         <div className="col p-2" style={{marginLeft: "20vw"}}>
                              <button id="cartBut"type="button" class="btn btn-primary" onClick={()=>this.props.cartEve(event)}>
                              <Link to="/goToCart" style={{textDecoration:"none",color:"black",fontSize:"1vw"}}>
                               Add To Cart</Link></button>
                        </div>
                    </div>
                </div>
        )
    }
}

