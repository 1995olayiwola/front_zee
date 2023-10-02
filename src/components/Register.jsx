import React from 'react';


import './Css/Register.css';


import Parse from 'parse';
import {useHistory} from 'react-router-dom';
import Loading from './Loading';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

const Register = () => {
  const history = useHistory()
  const [formValues,setFormValues] = React.useState({
    email:"",number:'',name:'',password:'',address:''
  })
  const handleChange = (e)=>{
    setFormValues(()=>{
      return {
        ...formValues,[e.target.name]:e.target.value
      }
    })
  }
  const handleSubmit= async(e)=>{
e.preventDefault();
setFormValues(async()=>{
  console.log(formValues)
  const user = new Parse.User();
  user.set("username", formValues.username);
  user.set("name", formValues.name);
user.set("password", formValues.password);
user.set("email", formValues.email);
user.set("phone", formValues.number);
user.set("address", formValues.address);
 
try {
  
      await user.signUp();
      setLoading(true);
      alert("registration successful!");
      setLoading(false);
      history.push('/login');
  // Hooray! Let them use the app now.
} catch (error) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
  
})
  }
  const [loading,setLoading] = React.useState(false);
  
  return (
    <div className='register_container'>
      
      <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src=''/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">
          ZEEGOLD PROPERTIES & HOMES
          </span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Register here</h5>
        <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg"  value={formValues.username} name="name" onChange={handleChange} />

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={formValues.email} name="email" onChange={handleChange}/>
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' type='number' size="lg"  value={formValues.number} name="number" onChange={handleChange} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={formValues.password} name="password" onChange={handleChange} />
          <MDBInput wrapperClass='mb-4' label='Address' id='formControlLg' type='text' size="lg"  value={formValues.address} name="address" onChange={handleChange} />
          {loading && <Loading/>}
        <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Sign Up</MDBBtn>
        
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <Link to='/login'>Login</Link></p>

        <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
 
 
  </div>
  )
}

export default Register