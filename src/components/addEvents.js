import React,{Component} from 'react'
import App from '../App.js'
class Addevent extends Component
{
   constructor()
   {
       super();
       this.state=(
       {
           heading:
           {
               border:'2px solid #000000',
               margin:'50px auto',
               marginTop: '0%',
               marginLeft: '25%',
               border:"2px solid black",
               borderRadius: '1em',
                width: '50vw',
               padding: '22px',
               boxShadow:"5px 10px #2D1E01" ,
            //  backgroundImage:'url("https://d.newsweek.com/en/full/58891/carleton-college-ed05.jpg?w=1600&h=1600&q=88&f=98f797bfa6b5710bb81775fdfc4a8b76")',
            backgroundImage:"linear-gradient(to left, rgba(186, 234, 56,0), rgba(186, 234, 56,1))",
            backgroundRepeat:"noRepeat"
           },
           bg:
           {
            backgroundImage:"linear-gradient(to right, rgba(57, 187, 89,0), rgba(57, 187, 89,1))"
           }
       }
     )
   }
  
   handleSubmit = event =>
   {
       event.preventDefault();
       console.log("hii called");
     var obj=
     {
         ambas:'',
         id:'',
         university:'',
         fest:'',
         imgUrl:'',
         fname:'',
         event:'',
         ename:'',
         efee:'',
         estartdate:'',
         eenddate:'',
         estarttime:'',
         eendtime:'',
         state:'',
         city:'',
         organisation:'',
         description:'',
         pincode:'',
         accomodation:''
     }
     obj.ambas = document.getElementById("1").value;
     obj.id = document.getElementById("2").value;
     obj.university = document.getElementById("3").value;
     obj.fest = document.getElementById("4").value;
     obj.fname = document.getElementById("5").value;
     obj.event = document.getElementById("6").value;
     obj.ename = document.getElementById("7").value;
     obj.efee = document.getElementById("8").value;
     obj.estartdate = document.getElementById("9").value;
     obj.eenddate = document.getElementById("10").value;
     obj.estarttime = document.getElementById("11").value;
     obj.eendtime = document.getElementById("12").value;
     obj.state = document.getElementById("13").value;
     obj.city = document.getElementById("14").value;
     obj.organisation = document.getElementById("15").value;
     obj.description = document.getElementById("16").value;
     obj.pincode = document.getElementById("17").value;
     obj.accomodation = document.getElementById("18").value;
     console.log(obj);
     this.props.onAdd(obj);
   }
   render()
   {
       return (
           <div style={this.state.bg}>
           <div   style={this.state.heading} align="center">
             <b><h1>EVENT DETAILS</h1></b>
               <form onSubmit={this.handleSubmit}>
                   <div>
                       <label> CAMPUS AMBASSADOR NAME</label><br/>
                            <input type = "text" id = "1" size = "30" required/><br/>

                       <label> EPIC ID</label><br/>
                              <input type = "text" id = "2"  size = "30" required/><br/>

                       <label> UNIVERSITY/COLLEGE</label><br/>
                                <input type = "text" id = "3"  size = "30" required/><br/>

                       <label> FEST TYPE</label><br/>
                                <select id = "4" >
                                    <option value = "cultural">Cultural</option>
                                    <option value = "technical">Technical</option>
                                    <option value = "sports">Sports</option>
                                    <option value = "liteature">Literature</option>
                                    <option value = "management">Management</option>
                                </select> <br/>
                     <label>IMAGE LINK</label><br/>
                               <input type="text" id="19"></input><br/>   
                       <label> FEST NAME</label><br/>
                                <input type = "text" id = "5"  size = "30" required/><br/>

                       <label> EVENT TYPE</label><br/>
                                <input type = "text" id = "6"  size = "30" required/><br/>

                       <label> EVENT NAME</label><br/>
                       <select id = "7" >
                                    <option value = "workshop">Workshop</option>
                                    <option value = "confrence">Confrence</option>
                                    <option value = "seminar">Seminars</option>
                                    <option value = "management">Management</option>
                                    <option value = "hackathon">Hackathon</option>
                                    <option value = "tedx">Tedx</option>
                                    <option value = "fun events">Fun Events</option>
                                    <option value = "travel">Travel</option>
                                </select> <br/>
                       
                       <label> EVENT FEE(INDIAN RUPEE)</label><br/>
                                <input type = "text" id = "8"  size = "30" required/><br/>

                       <label> EVENT START DATE</label><br/>
                               <input type = "date" id = "9" value = "2019-07-22" min = "2019-01-01" max = "2020-12-31" required /><br/><br/>

                       <label> EVENT END DATE</label><br/>
                                <input type = "date" id = "10" value = "2019-07-22" min = "2019-01-01" max = "2020-12-31" required /><br/><br/>

                       <label> EVENT START TIME</label><br/>
                               <input type = "time" id = "11" required /><br/>

                       <label> EVENT END TIME</label><br/>
                               <input type = "time" id = "12" required /><br/>
 
                       <label> EVENT STATE</label><br/>
                                 <input type = "text" id = "13"  size = "30" required/><br/>

                       <label> EVENT CITY</label><br/>
                                <input type = "text" id = "14"  size = "30" required/><br/>

                       <label> COLLEGE NAME ORGANISING EVENT</label><br/>
                                <input type = "text" id = "15"  size = "30" required/><br/>

                       <label> EVENT DESCRIPTION</label><br/>
                               <textarea id = "16" rows="10" cols="40" required></textarea><br/>

                       <label> CITY PINCODE</label><br/>
                                <input type = "text" id = "17"  size = "30" required/><br/>
                       
                       <label> ACCOMODATION</label><br/>
                                <input type = "text" id = "18"  size = "30" required/><br/>
                       <input type = "submit" value="SUBMIT"></input><br/>
                   </div>
               </form>
           </div>
           </div>
       )
   }
}
export default Addevent;