
import React,{Component} from 'react';
import {Header,Icon,Form,Segment,Button} from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      aadhaar:'',
      dob:'',
      contact:'',
      email:'',
      address:'',
      nationality:'',
      gender:'',
      education:'',
      experience:'',
      languages:'',
      skills:'',
      description:'',
      agreed:''
    };
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render(){
    return(
      <>
      <Segment className='pagesegment'>
      <Header as='h2' icon className="PageHeader"  >
            <Icon name='book' />
             Register as a Guide
      </Header>
      </Segment>
      <Form className='guideregisterform'> 
        <Form.Group unstackable widths={2} >
          <Form.Input
          label='First name'
          placeholder='First name'
          name='firstname'
          onChange={this.handleChange}
           />
          <Form.Input
          label='Last name'
          placeholder='Last name'
          name='lastname'
          onChange={this.handleChange}
           />
        </Form.Group>

        <Form.Group unstackable widths={2}>
          <Form.Input
          label='Contact No.'
          placeholder='91-xxxxxxxxxx'
          name='contact'
          onChange={this.handleChange}
           />
          <Form.Input
          label='Email'
          placeholder='123@xyz.com'
          name='email'
          onChange={this.handleChange}
           />
        </Form.Group>

        <Form.Group unstackable widths={2}>
          <Form.Input
          label='Aadhaar No.'
          placeholder='Aadhaar No.'
          name='aadhaar'
          onChange={this.handleChange}
           />
          <Form.Input
          label='Date Of Birth'
          placeholder='DD/MM/YYYY'
          name='dob'
          onChange={this.handleChange}
           />
        </Form.Group>

        <Form.TextArea label='Address' placeholder='Street/Locality, District, City, State.' />

        <Form.Group unstackable widths={2}>
          <Form.Input
          label='Nationality'
          placeholder='Nationality'
          name='nationality'
          onChange={this.handleChange}
           />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>

        <Form.TextArea label='Educational/Vocational Qualifications' placeholder='Mention your educational qualifications.' />

        <Form.Group unstackable widths={2}>
          <Form.Input
          label='Work Experience'
          placeholder='Years of Experience'
          name='experience'
          onChange={this.handleChange}
           />
          <Form.Input
          label='Languages Known'
          placeholder='Fluent Languages'
          name='languages'
          onChange={this.handleChange}
           />
        </Form.Group>

        <Form.TextArea label='Skills' placeholder='Mention your additional skills.' />
        <Form.TextArea label='Describe yourself' placeholder='Write a few words about yourself.' />
        <Form.Checkbox label="I agree to the Policy's Terms and Conditions" checked={this.handleChange}/>
        <Button type='submit' size='large' color='primary'>Register</Button>

      </Form>
      </>
        );
    }
  }
    

export default RegisterPage;