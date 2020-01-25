import React,{Component} from 'react';


import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">  <u> Create Your Own Events Here</u></h5>
            <p></p>
            <p>
                Cultural ||  Technical || Workshops || Confrences || </p>
            <p> Workshops || Fun Events || Alumni Meet || </p>
            <p> Expert Talk ||  StartUps || World Wide Opportunities || </p>
          </MDBCol>
          
          <MDBCol md="3">
            <h5 className="title">Epic Co.</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">All Events</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Register For Events</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Reviews</a>
              </li>
            </ul>
            
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Top Most Events</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Udaan</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">EDSmart</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Octa Hacks</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Grace</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Fanshawe</a>
              </li>
            </ul>
            
          </MDBCol>

          <MDBCol md="3">
            <h5 className="title">Technical</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">TechFest IIT Bombay</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Cognizance IIT Roorkee</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Kshitiz IIT Kharagpur</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shaastra IIT Madras</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pravega IISc</a>
              </li>
            </ul>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> EpicCo.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;