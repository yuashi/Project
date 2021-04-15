import React,{useState,createRef} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Card, Button, Image } from 'semantic-ui-react';
import topguides from "../shared/topguides";
import TopGuideModal from "../ComponentHelpers/TopGuideModal";

const BelowMap = ({scrollDiv}) =>{

    const[showModal,setShowModal] = useState(false);
    const[modaltopguide,setModaltopguide]=useState([]);

    /* For voice configuration
    const[voicemodaltopguide,setVoiceModalTopGuide]=useState(false);
    const[voiceshowmodal,setVoiceShowModal]=useState([]);
    */
    function getModalComponent() {
    if (showModal) {
      return <TopGuideModal modaltopguide={modaltopguide} 
                            setShowModal={setShowModal}/>
              
    }
    else {
      return null;
    }
  }



    return(

      <div id="topguidedisplay" >
        <h1 ref={scrollDiv}>Our Top Guides of the Month</h1>
        <Card.Group centered>
          {topguides.map(topguide => (
            <Card key={topguide.key}>
            <Image src={topguide.src} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{topguide.header}</Card.Header>
              <Card.Meta>
              <span className='date'>{topguide.joined}</span>
              </Card.Meta>
              <Card.Description>
               {topguide.carddescp} 
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
              <Button onClick= {()=>{ setModaltopguide(topguide);setShowModal(true)} }>View Profile</Button>
              <Button attached='right'>Book Now</Button>
              {getModalComponent()}
              </a>
             </Card.Content>
          </Card>
          ))
          }
       </Card.Group>
      </div>

    );
};

export default BelowMap;