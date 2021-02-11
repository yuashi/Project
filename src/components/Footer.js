import React,{Component} from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

class  Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">             
                        <div className="col-4 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5>Our Address</h5>
                            <address style={{color:'white'}}>
                              Dehradun, Uttarakhand<br />
                              India<br />
                              248001<br />
                              <FontAwesomeIcon icon={faPhone}/>: +91 3030303030<br />
                              <FontAwesomeIcon icon={faEnvelope}/>: <a href="mailto:abc@xyz.net">
                                 travelpal@world.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2020 TravelPal</p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
    
}

export default Footer;