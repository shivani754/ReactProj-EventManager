  
import React,{Component} from 'react';
import { Card,CardText,CardBody,CardFooter,CardHeader} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

import '../review.css';
class Reviews extends Component{

    constructor()
    {
        super();

        this.state = (
            {
                reviews : [],
                rating : 0,
                count : 0
            }
        )
    }
    handleSubmit = event => {
        event.preventDefault();
        var obj={
            name:'',
            college:'',
            fest:'',
            rev:'',
            date:'',
            time:'',
            rate:'',
            count:0,
            comments:[]
        }
        obj.name = document.getElementById("1").value;

        obj.college = document.getElementById("2").value;

        obj.fest = document.getElementById("3").value;

        obj.rev = document.getElementById("4").value;
        
        var tempDate = new Date();

        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() ;
        
        var time =  tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();

        obj.rate = this.state.rating;

        obj.date = date;

        obj.time = time;

        obj.count = this.state.count;
        this.add(obj);
    }
  addComment(event,rev){
      event.preventDefault();
     // var temp=this.state.reviews[id];
      
      var comm=document.getElementById(""+rev._id).value;
      var date=new Date();
      var date1 = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() ;    
        var time1 =  date.getHours()+':'+ date.getMinutes()+':'+ date.getSeconds();

    var obj = {
      date:date1,
      time:time1,
      comment:comm
    }
      rev.comments.push(obj);
    fetch(' http://localhost:5000/reviews/addComment/'+rev._id,{
         method:"PUT",
         headers:{
            "Content-Type":"application/json",
            },
         body:JSON.stringify(rev)
      })
      .then(res => {
         if(res.ok){return res.json();}
      })
      fetch('http://localhost:5000/reviews')

      .then( res =>  res.json())
      .then( res => {  
                      this.setState( { reviews:res } );
                    }
           )
  }
  liked(event,rev)
  {
      event.preventDefault();
      rev.count=rev.count+1;
      fetch(' http://localhost:5000/reviews/liked/'+rev._id,{
         method:"PUT",
         headers:{
            "Content-Type":"application/json",
            },
         body:JSON.stringify(rev)
      })
      .then(res => {
         if(res.ok){return res.json();}
      })
      fetch('http://localhost:5000/reviews')

      .then( res =>  res.json())
      .then( res => {  
                      this.setState( { reviews:res } );
                    }
           )
    
  }
 
    add(data)
    {

      fetch('http://localhost:5000/reviews/add',
      {
        method: "POST",

          headers:{  "Content-Type":"application/json",  },

            body:JSON.stringify(data),
      } )

      .then( res => {

            if(res.ok)
              return res.json()

        } )

      .then( res => {

            console.log(JSON.stringify(res));
        
        } )
  }
  onStarClick(nextValue)
  {
    this.setState( { rating: nextValue } );
  }

    render()
    {
        return (
          <div style={{backgroundColor: "grey"}}>
          <div>
              <center>
                  <h4><b><center>ELEGANT BLOGS</center></b></h4>
              </center>
          </div>
          <div className="row" style={{padding:"10px"}}>
      
              { this.state.reviews.map( (r) =>
      
              <div className="col-12" style={{marginTop:"10px",boxShadow:"0px 2px 10px black",}}>
                  <Card style={{backgroundImage:" linear-gradient(to right, rgba(198, 217, 224,0), rgba(198, 217, 224,1))"}}>
      
                      <CardBody style={{color: "black"}}>
      
                          <CardHeader >
                              <center>
                                  <h3><b>{r.fest} AT {r.college} , <i><u>{r.name}</u></i></b></h3></center>
                          </CardHeader>
      
                          <CardText>
                              <p style={{color: "black"}}><i>{r.rev}</i></p>
                          </CardText>
      
                      </CardBody>
      
                      <CardFooter>
      
                          <i> {r.date} , {r.time}</i>
      
                          <StarRatingComponent starCount={10} value={r.rate} />
                          <h3 onClick={ (event)=> this.liked(event,r) }>
                                        <i className="fa fa-heart" style = { {fontSize:"24px",color:"red"} } id="heart"></i>
                                          {r.count} </h3>
      
                          <b>COMMENTS.......</b>
                          <div style={{border:"2px solid black"}}>
                              {r.comments.map((comm,index)=>
                              <p style={{color: "black"}}>{comm.comment}</p>
                              )}
                          </div>
                          <form onSubmit={(event)=>this.addComment(event,r)}>
                              <div className="form-group">
                                  <input type="text" id={r._id} className="form-control" placeholder="Comment here" />
                                  <button type="submit" className="btn btn-primary">Comment</button>
                              </div>
                          </form>
                      </CardFooter>
      
                  </Card>
              </div>
      
              ) }
      
              
                  <form onSubmit={ this.handleSubmit} style={{color:"white",width:"100%",backgroundImage:"url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')" }}>
                      <div className="row container" style={{marginLeft: "0px",marginRight: "0px"}}>
                          <div className="col-12">
                              <h3><i><center>WANT TO ADD BLOGS!!!</center></i></h3>
                          </div>
                      </div>
                      <div className="row" style={{marginRight: "0px",marginLeft:"30px"}}>
                          <div className="col-md-4 col-12">
                              <label> NAME</label>
                              <br/>
                              <input id="1" className="w-100" placeholder="Enter name"type="text" />
                              <br/>
                          </div>
                          <div className="col-md-4 col-12">
                              <label> College/University</label>
                              <br/>
                              <input id="2" className="w-100"placeholder="Enter university name" type="text" />
                              <br/>
                          </div>
                          <div className="col-md-4 col-12">
                              <label> Event Name</label>
                              <br/>
                              <input id="3" className="w-100" placeholder="Enter event name"type="text" />
                          </div>
                          <div className="col-12">
                              <div className="form-group">
      
                                  <label for="exampleFormControlTextarea3"> <b> ADD REVIEWS </b> </label>
      
                                  <textarea id="4" placeholder="Give your blog.."className="form-control" rows="7"></textarea>
      
                              </div>
      
                              <h5>Rate Your Experience</h5>
      
                              <StarRatingComponent starCount={10} value={this.state.rating} onStarClick={this.onStarClick.bind(this)} /><br></br>
                              <center><input type="submit" value="SUBMIT" className="w-50" id="sub"></input></center>
      
                              <br/>
      
                          </div>
                      </div>
      
                  </form>
      
              
      
          </div>
      </div>
        );
    }
}
export default Reviews;