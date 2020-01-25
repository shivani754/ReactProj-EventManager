import React,{Component} from 'react';
import App from '../App.js';
import vc from './Hotel.mp4';
import '../hotel.css';
import { Card, CardTitle, CardText,CardBody, Row, Col } from 'reactstrap';

class Hotels extends Component
{
    constructor()
    {
        super();
        this.state = {
            hotels: [],
            hotels1: [],
        }
    }
    componentDidMount()
  {
      fetch('http://localhost:5000/hotel')
      .then( res => { 
                       return res.json()
                    } 
           )
      .then( res => {  
                      this.setState( { hotels:res } );
                    }
           )
  }
    handleSubmit = event =>
    {
      event.preventDefault();

      var temp=document.getElementById("1").value;

      console.log(temp);
      console.log(this.state.hotels);
      if(temp!="")
      {
        this.setState(
            {
              
                 hotels1: this.state.hotels.filter( hotel =>
                     {
                          return hotel.state.toLowerCase() === temp.toLowerCase()||
                          hotel.city.toLowerCase() === temp.toLowerCase()
                    })
            }
        )
      }
      console.log(this.state.hotels1);
    }
    render()
    {
        return (
            <div style={{padding:"1vw"}}>
              <video id="myVideo"   autoPlay>
                    <source src={vc} type="video/mp4"/>
                     Your browser does not support the video tag.
              </video>
            <form onSubmit={this.handleSubmit} style={{overflow: "hidden"}}>
                <div class="form-group">
                   <label style={{color:"white",fontSize:"1vw"}}>ENTER THE CITY WHERE YOU WANT TO SEARCH THE HOTELS:</label>
                   <input type="text" class="form-control"  id="1"placeholder="Enter State" style={{height:"5vh"}}/>
                </div>
                <button type="submit" value="submit" class="btn btn-primary" style={{height:"5vh"}}>Submit</button>
             </form>
            <div width="100%" >
             {
             this.state.hotels1.map( (hotel) =>
     
             <Row sm="5">
     
                <Col sm="5">
                 <center>
                   <Card>
                     <img width="100%" height="150%" src= {hotel.link} alt="not available" />
                       <CardBody>
                         <CardTitle style={{color:"coral",fontSize:"1.5vw"}}><center><b>{hotel.name}</b></center></CardTitle>
                         <CardText style={{color:"black",fontSize:"1vw"}}><center><b>{hotel.city}</b></center></CardText>
                         <CardText style={{color:"black",fontSize:"1vw"}}><center><b>{hotel.state}</b></center></CardText>
                         <CardText style={{color:"black",fontSize:"1vw"}}><center><b>{hotel.phone}</b></center></CardText>
                       </CardBody>
                   </Card>
                   </center>
               </Col> 
           </Row>   )
          }
       </div>
       </div>
            );
    }
}

export default Hotels;

{/* <div className="row">
  <div className="col-6">
  <img width="100%" height="150%" src= {hotel.link} alt="not available" />
  </div>
  <div className="col-6">
     <p style={{color:"coral",fontSize:"1.5vw"}}><center><b>{hotel.name}</b></center></p>
     <p style={{color:"black",fontSize:"1vw"}}><center><b>{hotel.city}</b></center></p>
     <p style={{color:"black",fontSize:"1vw"}}><center><b>{hotel.state}</b></center></p>
     <p style={{color:"black",fontSize:"1vw"}}><center><b>{hotel.phone}</b></center></p>
  </div>
</div> */}