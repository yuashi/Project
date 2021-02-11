import React,{Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Button,Modal,ModalHeader,ModalBody,
    Form,FormGroup,Input ,Label,NavLink,Jumbotron,Container,InputGroup, InputGroupAddon} from 'reactstrap';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt,faSearchLocation} from '@fortawesome/free-solid-svg-icons';
/*import { Input, Menu } from 'semantic-ui-react'*/


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false,
            activeItem:'home',
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        /*this.handleItemClick=this.handleItemClick.bind(this);*/
    }
    /*handleItemClick = (e, { name }) => this.setState({ activeItem: name })*/

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: "+this.username.value + " Password: "+this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render(){
        /*const { activeItem } = this.state*/
        return(
            <>
           {/* <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='login'
            active={activeItem === 'logout'}
            onClick={this.toggleModal}
          />
        </Menu.Menu>
           </Menu>*/}


            <Navbar dark color="dark" expand="md" fixed="top" className="justify-content-between" >
    
                   
                  <NavbarBrand  href="/">
                  <img src="assets/imgs/logo.jpg" height="40" width="60"
                           alt="TravelPal" /> TravelPal
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavItem className="navitems">
                      <div style={{display:"inline-block",alignItems:"center",justifyContent:"center",left:0}}>
                      <SearchBar/>
                      </div>
                  </NavItem>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar className="ml-auto">
                      <NavItem className="navitems">
                          <NavLink href="#">
                              <span className="fa fa-home fa-lg"></span> Home
                          </NavLink>
                     </NavItem>  
                     <NavItem className="navitems">
                          <NavLink href="#">
                              <span className="fa fa-info fa-lg"></span> About Us
                          </NavLink>
                      </NavItem>
                      <NavItem className="navitems">
                          <NavLink href="#">
                              <span className="fa fa-list fa-lg"></span> Services
                          </NavLink>
                      </NavItem>
                      <NavItem className="navitems">
                          <NavLink href="#">
                              <span className="fa fa-address-card fa-lg"></span> Contact Us
                          </NavLink>
                       </NavItem>   
                  </Nav>
                  </Collapse>
                  <Nav className="mr-auto" navbar>
                      <NavItem>
                          <Button  color="secondary"  onClick={this.toggleModal}>
                          <FontAwesomeIcon icon={faSignInAlt}/> Login
                          </Button>
                      </NavItem>
                  </Nav>
               
        </Navbar>
               
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                   <ModalHeader className="modalheader" toggle={this.toggleModal}>Login</ModalHeader>
                   <ModalBody>
                       <Form onSubmit={this.handleLogin}>
                           <FormGroup>
                               <Label htmlFor="username">Username</Label>
                               <Input type="text" id="username" name="username" 
                                innerRef={(input) => this.username=input}/>
                           </FormGroup>
                           <FormGroup>
                               <Label htmlFor="password">Password</Label>
                               <Input type="password" id="password" name="password" 
                                innerRef={(input) => this.password=input}/>
                           </FormGroup>
                           <FormGroup check>
                               <Label check>
                                   <Input type="checkbox" name="remember" 
                                    innerRef={(input) => this.remember=input}/>
                                   Remember me
                               </Label>
                           </FormGroup>
                           <Button type="submit" value="submit" color="primary" >Login</Button>
                           <hr/>
                           <FormGroup>
                               Coming for the first time ?<br/>
                           </FormGroup>
                           <Button  type="submit" value="SignUp" color="warning">Sign Up</Button>
                       </Form>

                   </ModalBody>
               </Modal>

               <div>
                   <Jumbotron fluid style={{backgroundImage:`url('assets/imgs/tourist.jpg')`,backgroundSize:'cover',color:'white',marginTop:50}}>
                       <Container fluid >
                           <h1 className="display-1">TravelPal</h1>
                           <p className="lead">You are not alone! Explore India with our best Guides and get the most of your travel.<br/>
                            Happy Exploring !</p>
                       </Container>
                   </Jumbotron>
               </div>
               </>

            
        );
    }
}

 const SearchBar = () => {
    return(
       
            <InputGroup className="mb-2" >
                <Input placeholder="Where do you want to go ?" />
                <InputGroupAddon addonType="append">
                <Button outline color="secondary"><FontAwesomeIcon icon={faSearchLocation}/></Button>
                </InputGroupAddon>
    </InputGroup>
    
    
       
    );
}
export default  Header;