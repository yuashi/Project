import React from 'react';
import {Header,Icon,Segment} from 'semantic-ui-react';

const AboutUsPage = ()=> {
    return(
  <Segment className='pagesegment'>     
  <Header as='h2' icon className="PageHeader"  >
        <Icon name='info' />
         About Us
  </Header>
  </Segment> 
    );
}

export default AboutUsPage;