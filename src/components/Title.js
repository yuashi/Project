import React from 'react';
import {Jumbotron,Container} from 'reactstrap';

const Title =()=>{
    return(
     <div>
     <Jumbotron fluid style={{backgroundImage:`url('assets/imgs/tourist.jpg')`,backgroundSize:'cover',color:'white',marginTop:50}}>
     <Container fluid >
        <h1 className="display-1">TravelPal</h1>
        <p className="lead">You are not alone! Explore India with our best Guides and get the most of your travel.<br/>
         Happy Exploring !</p>
    </Container>
    </Jumbotron>
    </div>
    );

}

export default Title;