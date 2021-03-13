import React,{useState} from 'react';
import {Icon,Menu,Input,Button,Checkbox,Form,Image} from 'semantic-ui-react';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header =()=>{

    const[open,setOpen]=useState(false);
    const[open2,setOpen2]=useState(false);

    /*----login modal user details---------------*/
    const[loginUser,setLoginUser]=useState('');
    const[loginPass,setLoginPass]=useState('');

    /*-----sign up modal user details------------*/
    const[signupFirstname,setFirstName]=useState('');
    const[signupLastname,setLastName]=useState('');
    const[signupEmail,setEmail]=useState('');
    const[signupContact,setContact]=useState('');
    const[signupUser,setSignupUser]=useState('');
    const[signupPass,setSignupPass]=useState('');


    
    const toggleModal=()=>setOpen(!open);
    const toggleSignUpModal=()=>setOpen2(!open2);
    
    return(
        <>
        <Menu icon='labeled' inverted fixed='top' fluid widths={6} stackable borderless>
        <Menu.Item header><Image src="assets/imgs/logo.jpg" size='tiny' verticalAlign='top' floated='left' /></Menu.Item>
        <Menu.Item >
        <Input
        size='mini'
        action={{ type: 'submit', content: 'Go' }}
        placeholder='Search'
        />
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/home"
          name='home'
         
        >
        <Icon name='home'/>
        Home
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/aboutus"
          name='aboutus'
          
        >
        <Icon name='info'/>
        About Us
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/register"
          name='register'
          
        >
        <Icon name='book'/>
        Register as a Guide
        </Menu.Item>
        <Menu.Item>
        <Button onClick={toggleModal}>Log-in</Button>
        </Menu.Item>  
        </Menu>



     <Modal
      isOpen={open} toggle={toggleModal}>
    <ModalHeader className="modalheader" toggle={toggleModal}>Login</ModalHeader>
    <ModalBody>  
    <Form onSubmit={toggleModal}>
    <Form.Input
      label='Username'
      placeholder='user123'
      name='loginUser'
      onChange={(e)=> setLoginUser(e.target.value)} />
    <Form.Input 
      label='Password'
      placeholder='123@'
      name='loginPass'
      type='password' 
      onChange={(e)=>setLoginPass(e.target.value)} />
    <Form.Field>
      <Checkbox label='Remember me' />
    </Form.Field>
    <Button onClick={()=>window.alert(JSON.stringify([loginUser,loginPass]))} fluid color='blue'>LOGIN</Button>
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
      <input placeholder='First Name'
             name='signupFirtsname'
             type='text'
             onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Last Name</label>
      <input placeholder='Last Name'
              name='signupLastname'
              type='text'
              onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Email</label>
      <input placeholder='Email'
              name='signupEmail'
              type='email'
              onChange={(e)=>setEmail(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Contact no.</label>
      <input placeholder='Contact no'
              name='signupContact'
              type='number'
              onChange={(e)=>setContact(e.target.value)}  />
    </Form.Field>
    <Form.Field required>
      <label>Username</label>
      <input placeholder='user123'
              name='signupUser'
              onChange={(e)=>setSignupUser(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Password</label>
      <input placeholder='123@'
              name='signupPass'
              type='password'
              onChange={(e)=>setSignupPass(e.target.value)}  />
    </Form.Field>
    <Form.Field required>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button  type='submit' onClick={()=>{window.alert('You have successfully signed up.'+`${JSON.stringify([signupFirstname,signupLastname,signupEmail,signupContact,signupUser,signupPass])}`);setOpen(false)}} fluid color='blue'>Sign Up</Button>
    </Form>
    </ModalBody>
     </Modal>

</>
    );
}
export default Header;