import React,{Component} from 'react';
import '../App.css';
import search from './search.png';
import Card from './cards.js';
import blogger from './blogger.png';
import calendar from './calendar.png';
import images from './images.js';
import imgEvent from './eventImages.js';
export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      cityEvents:[]    //cityEvents:this.props.events-->initialise the array empty
    }
    this.handleClick=this.handleClick.bind(this);
    
  }
  handleKey=(e)=>{
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById("sear").click();
    }
  }
  handleClick(e){
    console.log("hi");
    e.preventDefault();
    let data = document.querySelector('#searchInp').value;
    /*this.setState((props)=>({cityEvents :props.events}) );
    
    //console.log(this.props.event);
    // this.set+temp=this.props.event.filter((eve) => {return eve.id>2 })
    // this.props.event.map((event,index)=>(
    //   <Card key={index} events={event} ></Card>

    let data = document.querySelector('#searchInp').value;
   // console.log(this.props.event)
    // check case sensitivity
    let cityEvent = this.props.events.filter( (obj) => {return obj.city === data}) 
    // this.props.event.filter((event,index)=>{
    //   if(event.city==data)
    //      this.state.eventf.push(event);
    // })
      this.setState({cityEvents: cityEvent})
      console.log(this.state.cityEvents);
      document.querySelector(".d2").innerHTML = "";
    document.querySelector(".d2").innerHTML = this.state.cityEvents.map((event,index)=>
     <Card key={index} events={event} ></Card>)
    // document.querySelector(".d2").innerHTML = this.props.event.filter((event,index)=> { if (event.city === data) return <Card key={index} events={event} ></Card>})
   //console.log(temp)
   */
     this.state.cityEvents=[]
    this.props.events.filter((event,index)=>{
      if(event.city===data)
         this.state.cityEvents.push(event);
    })
    document.querySelector(".d2").innerHTML = "";
    if(this.state.cityEvents=="")
    document.querySelector(".d2").innerHTML="<p style='text-align:center;font-size:30px;padding:2px'>No results found</p>";
    else
    document.querySelector(".d2").innerHTML = this.state.cityEvents.map((event,index)=>
     <Card key={index} events={event} ></Card>)
   
  }
  render(){
      // setTimeout(()=>{
                //without setTimeout with 1000 error comes ..i.e maximum exceeded
            //
      return(
        <div class="container12">
            <div id="carousel" className="carousel slide" data-ride="carousel">
                 <div className="carousel-inner">
                      <div className="item active">
                           <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[0]} alt="First slide"/>
                      </div>
                      <div className="item">
                            <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[1]} alt="Second slide"/>
                      </div>
                      <div className="item">
                           <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[2]} alt="Third slide"/>
                       </div>
                      <div className="item">
                           <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[3]} alt="Fourth slide"/>
                     </div>
                      <div className="item">
                            <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[4]} alt="Fifth slide"/>
                     </div>
                 </div>
        </div>
        <div className="car-head">
            <b><p>No. 1 College Fests & Events Ticketing Platform</p></b>
        </div>
        <div className="car-for">
              <input type="text" id="searchInp" placeholder="Search events and fests by name,city or type" name="search"
                  onKeyUp={this.handleKey}/>
               <button onClick={this.handleClick} className="searBtn">
               <img id="sear" src={search} style={{height:"1.5vw"}} alt="not available" onClick={(e)=>this.handleClick}></img></button>
       </div>
        <hr className="hr1"></hr>
        <div style={{backgroundColor:"grey"}}>
             <center>
             <table  className="tbl">
                <tr>
                   <td className="events" >
                       <img src={calendar} className="eImg" alt="not available"></img>
                       <p>Events</p>
                  </td>
                   <td className="blogs">
                        <img src={blogger} className="eImg"alt="not available"></img>
                      <p>Blogs</p>
                  </td>
               </tr>
            </table>
            </center>
        </div>
         <hr className="hr1"></hr>
        <div className="d2">
            {this.props.events.map((event,index)=><Card key={index} events={event} ></Card> )}
        </div>
        <div className="d4">

         </div>
        <div className="d3">
         <center><button className="view">View All Events</button></center>
         </div>
      </div>
      )
  }
}