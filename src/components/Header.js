import React,{useState} from 'react';
import {Icon,Menu,Input,Button,Checkbox,Form,Image} from 'semantic-ui-react';
import {Jumbotron,Container,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

const Header =()=>{

    const[activeItem,setActiveItem]=useState('home');
    const[open,setOpen]=useState(false);
    const[open2,setOpen2]=useState(false);

    const handleItemClick=(e,{name})=>setActiveItem(name);
    const toggleModal=()=>setOpen(!open);
    const toggleSignUpModal=()=>setOpen2(!open2);
    
    return(
        <>
        <Menu icon='labeled' inverted fixed='top' fluid widths={7} stackable borderless>
        <Menu.Item header><Image src="assets/imgs/logo.jpg" size='tiny' verticalAlign='top' floated='left' /></Menu.Item>
        <Menu.Item >
        <Input
        size='mini'
        action={{ type: 'submit', content: 'Go' }}
        placeholder='Search'
        />
        </Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
        <Icon name='home'/>
        Home
        </Menu.Item>
        <Menu.Item
          name='aboutus'
          active={activeItem === 'aboutus'}
          onClick={handleItemClick}
        >
        <Icon name='info'/>
        About Us
        </Menu.Item>
        <Menu.Item
          name='services'
          active={activeItem === 'services'}
          onClick={handleItemClick}
        >
        <Icon name='services'/>
        Services
        </Menu.Item>
        <Menu.Item>
        <Button onClick={toggleModal}>Log-in</Button>
        </Menu.Item> 
       
             
        </Menu>

<div>
<Jumbotron fluid style={{backgroundImage:`url('assets/imgs/tourist.jpg')`,backgroundSize:'cover',color:'white',marginTop:50}}>
    <Container fluid >
        <h1 className="display-1">TravelPal</h1>
        <p className="lead">You are not alone! Explore India with our best Guides and get the most of your travel.<br/>
         Happy Exploring !</p>
    </Container>
</Jumbotron>
</div>

     <Modal
      isOpen={open} toggle={toggleModal}>
    <ModalHeader className="modalheader" toggle={toggleModal}>Login</ModalHeader>
    <ModalBody>  
    <Form onSubmit={toggleModal}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' fluid color='blue'>LOGIN</Button>
    </Form>
    </ModalBody>
    <ModalFooter><Button onClick={toggleSignUpModal} fluid color='yellow'>Sign Up</Button></ModalFooter> 
     </Modal>

     <Modal
      isOpen={open2} toggle={toggleSignUpModal}>
    <ModalHeader className="modalheader" toggle={toggleSignUpModal}>Welcome to our community! Let's Sign you Up. </ModalHeader>
    <ModalBody>  
    <Form onSubmit={toggleSignUpModal} success>
    <Form.Field required >
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field required>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field required>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field required>
      <label>Contack no.</label>
      <input placeholder='Contactno'  />
    </Form.Field>
    <Form.Field required>
      <label>Password</label>
      <input placeholder='password'  />
    </Form.Field>
    <Form.Field required>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button  type='submit' onClick={()=>{window.alert('You have successfully signed up.');setOpen(false)}} fluid color='blue'>Sign Up</Button>
    </Form>
    </ModalBody>
     </Modal>
 


</>
    );
}
export default Header;