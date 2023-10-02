import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
 // Import your CSS styles here
import '../index.css';
import Parse from 'parse';
import {useHistory} from 'react-router-dom';
import Loading from './Loading';
function App() {
  const history = useHistory()
  const [formValues,setFormValues] = React.useState({
    email:"",firstName:'',password:'',lastName:''
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
  user.set("username", formValues.email);
  user.set("firstName", formValues.firstName);
  user.set("LastName", formValues.lastName);
user.set("password", formValues.password);
user.set("email", formValues.email);

 
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
    <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={formValues.firstName} 
            name="firstName" 
            onChange={handleChange}
            
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" 
          className="form-control" 
          placeholder="Last name"
          value={formValues.lastName} 
            name="lastName" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={formValues.email} 
            name="email" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={formValues.password} 
            name="password" 
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
  );
}

export default App;
