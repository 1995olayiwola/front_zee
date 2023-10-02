import React from 'react';
import '../index.css';
import {useHistory} from  'react-router-dom';
import Parse from 'parse';

const Login = ()=>{
    const [loading,setLoading] = React.useState(false)
  const history = useHistory()
  const [formValues,setFormValues] = React.useState({
    email:"",password:''
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
  
 
try {
  
  const user = await Parse.User.logIn(formValues.email, formValues.password);
  setLoading(true);
  alert('Login successful, you are wellcome')
  setLoading(false)
      history.push('/');
  // Hooray! Let them use the app now.
} catch (error) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
  
})
  }
    return (
        <form>
        <h3>Sign In</h3>
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
}

export default Login;