import React,{useState} from 'react';
import {  Button,Modal, Image } from 'semantic-ui-react';

const TopGuideModal = ({modaltopguide,setShowModal}) => {

    const [open, setOpen] = useState(true);

    return(
      <div id="topguidemodal">
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        >
        <Modal.Header>{modaltopguide.header} </Modal.Header>
        <Modal.Content image>
          <Image size='massive' src={modaltopguide.src} wrapped />
          <Modal.Description>
            <p>
              {modaltopguide.modaldescp}
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => {setOpen(false);setShowModal(false)}} positive>
            Book Now
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    );

}

export default TopGuideModal;