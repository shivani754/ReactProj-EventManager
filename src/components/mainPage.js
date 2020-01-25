import React,{Component} from 'react';
import '../mainPage.css';
import search from './search.png';
import Cards from './cards.js';
import blogger from './blogger.png';
import calendar from './calendar.png';
import images from './images.js';
import imgEvent from './eventImages.js';
import {Link} from 'react-router-dom';
export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      data:'',
      showAll:false  
    }
 this.handleClick=this.handleClick.bind(this);
this.goingBottom=this.goingBottom.bind(this); 
this.toggleViewAll  = this.toggleViewAll.bind(this);
  }
  toggleViewAll(){
      if(this.state.showAll)
      document.getElementsByClassName("view")[0].innerHTML="View More";
      else 
       {
           document.getElementsByClassName("view")[0].innerHTML="View Less";
           document.body.scrollTop = 800;
           document.documentElement.scrollTop = 800;
       }
      this.setState({
          showAll:!this.state.showAll
      })
  }
  goingBottom(eve) {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  }
  handleKey=(e)=>{
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById("sear").click();
    }
  }

  handleChange(e){
     // e.preventDefault();
      this.setState({data:e.target.value})
  }
  handleClick(e){
      e.preventDefault();
      this.setState({data:this.state.data})
      this.goingBottom();
  }
  render(){
        let cityEvents=this.props.events.filter((event,index)=>{
            return (
              event.city.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1||
              event.fname.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1||
              event.fest.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1
            )
        })
      return(
        <div className="container-fluid">
    {/* //
    <div className="container12"> */}
        <div className="row">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{height: "30vw"}} src={imgEvent[0]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{height: "30vw"}} src={imgEvent[1]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{height: "30vw"}} src={imgEvent[2]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{height: "30vw"}} src={imgEvent[3]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{height: "30vw"}} src={imgEvent[4]} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
            </div>
        </div>

        <div className="car-head">
            <center><b><p >College Fests & Events Ticketing Platform</p></b>
            <p style={{fontSize:"14px",fontWeight:"bold"}}>Features College events| Sell College events tickets Online|Registrations for free|Events Analytics</p></center>
        </div>
        <div className="car-for">
            <input type="text" id="searchInp" placeholder="Search events and fests by name,city or type" name="search" onKeyUp={this.handleKey} value={this.state.data} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.handleClick} className="searBtn">
               <img id="sear" src={search} style={{height:"1.5vw"}} alt="not available" onClick={(e)=>this.handleClick}></img></button>
        </div>
        <div className="row" style={{textAlign: "center"}}>

            <div className="col" style={{backgroundImage:" linear-gradient(45deg, white,black,white)"}}>
                <center>
                    <table className="tbl">
                        <tr>
                            <td className="events">
                                <Link to="/about">
                                <img src={calendar} className="eImg" alt="not available"></img>
                                </Link>
                                <p>About Us</p>
                            </td>
                            <td className="blogs">
                                <Link to="/reviews">
                                <img src={blogger} className="eImg" alt="not available">
                                </img>
                                </Link>

                                <p>blogs</p>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>

        </div>
        
        <div className="row">
            <div className="col-12 pr-0" id="mainDiv2">
                <div className="row">
                { cityEvents.length>0?cityEvents.filter((event,idx)=>{
                    if(idx<4 || this.state.showAll)
                    return true;
                    return  false;
                }).map((event,index)=>
                <Cards key={index} events={event} selectedEvent={()=>this.props.selectEvent(event)}></Cards> ):
                <p style={{textAlign: "center",fontSize: "3vw",padding: "2px",marginTop: "30vh"}}>No Results Found</p>
                }
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12" style={{marginTop: "0.5vw",backgroundColor: "antiquewhite"}}>
                <center><button className="view" onClick
                ={this.toggleViewAll}>View More</button></center>
            </div>
        </div>
    </div>
      )
  }
}