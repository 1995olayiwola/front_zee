import React from 'react';
import Parse from 'parse';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import Loading from './Loading';

const Logout = () => {
  const [loading,setLoading]= React.useState(false);
    const history = useHistory()
    const user = Parse.User.current();
  return (
    <>

    
    <p>Good bye, see you next time you log in.</p>
    <p>Good bye.</p>
    <Button onClick={()=>{
        Parse.User.logOut();
        setLoading(true);
        history.push('/login');
    }}>Logout</Button>
    
    </>
  )
}

export default Logout