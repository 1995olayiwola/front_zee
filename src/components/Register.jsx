import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import './Css/Register.css';
import Footer from './Footer';
import Form from './Form';
import Button from 'react-bootstrap/Button';
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
    email:"",number:'',username:'',password:'',address:''
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
      <MDBCardImage src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJwAnAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAD4QAAIBAgQDBQYEBQMDBQAAAAECAwQRABIhMQUTQQYiUWFxFIGRobHBIzJC0QcVUuHwcqLxM5LSU2J0grP/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJBEAAgIBBAIDAQEBAAAAAAAAAAECEQMSITFBE1EEImEUsTL/2gAMAwEAAhEDEQA/AC+Ow9hhpGPfPOEwhwtsIcMQ0jCWw/CYYhhGEIw8jHWwCI7Y62H2wlsADcdbDrY62HYHWwuii7EAeJxwGBvaGRYqCzEgswK+o1xnlnog5eiox1OgLVVvsfHqlKZWkecrdlP5ddfpr64i7QovEPapJXyCFyihNS9wNPD/AA4gEy1vEZ55ZlUFSbJoBpqD8T8MDOL1KTcswzmQoBcHZddNv81x89LJKcvyzvUFEngqIo4UR0ljVF5bItiSCNSSL6g2wUpq6sar5ixOVWHlpzDlzgaqT0v10xjUMpqeXExDFtRmyjz1Ppgvx2uyScOqYWJKRgTSA2FydgPTqNNMaRjLS96X+idXZsOysEM9PJWyoZKkOylrW38Nfn64lnr6umldKeABLkkoo1PU4d2ZrqGWJ6aKoPtLWMilhuRsPO2KXGKLib1p9kpjygLDUDqcd88UnhjGPXoyhP7OzVnbDbYkIwlsd5zkZGGkYlthCMAEVsdbElsJlwxUR2x1sSZcJlwBRHbHWxJlx2U4BEdsdbEmU47KcMRHbGd7Vu4np4i4WLKWIK312xpguMx2uVva4LAsOUbITZSd/tji+c6ws2wr7mZo44JqJ35pU5zzGBGYL4jFCuAp4jyUCIH0aR9b6nXxH7YFrXZIpospLGW4dRYLrewG2LPEyZabIzNIWRLEjRdN9vEWx5MYVudpXo6g/wAwhkyhJHbNe1hqb3GDx4lTSQiAwQySS96SZwTY3ubD34AVUQDwpAwRDGu39RGLVHQ97lzVUa5xYyyaIo0vqfLpf642jG2S6NdwqjThfEqSeaVdRzJZMv5WP/JHhrjRcU4ZTVNWZamvdWIFlBZQF6DTGZquM8Ejoo6WkElTNYKzQR3BI10Lf3xabj/GZjzKTgM6xHbM4W56mxQ468GnHabswkm90b4rhpTE+XHZcdtmVFfJjiuLGXCZMOwor5MJkxZ5eOyYNQqK2THZMWMmEKgb4LCiDJhcmJbAdMQVVXTUaZ6qoihT+qRwo+eE5exUOyYTJgJL2v4ZcpRCp4hJp3aOEvv56L88V5eK9oawWoOEQUin9ddMT4bqnqOuJ8seivGwjxniHsNG8lOEllVguW97He1vTADtnUG1JOkgEfLzEc3KvvOBPH4uKo8i13FBnkUPlp15a39d9MCZIKMUvNZXaaJu/Iz5s2gsN7+ePOzZXkbizeGPTuQTR8PJVY2eoVmzOsaHS411va/nfEVdBFHFEY6Sanph3Rmuxc3J1Gg8rX6YqqKlVKESMmb9Kka2GHJBUtAEWmZxnzArGzEHw+vxxjFNKma9lmV4qcxrHAzBrDMTlt5bX91zi9Sx0rGQyxx8wEd92PdFvDS/zxFFwbiUpWSppZIacKJbsoHpv44bw+gl4pxkUcYzAx3NjYDfW+NYr60hPncL0dZBxCePl0o5ECkvym5Yd+g01tg1w6KSWmV/Z3iBtaOQlioAAttg3wPglLwinjSCNeYQTI/9R8sC+NtAtaBJxDiUbZB3KcjIuOpY2lyZ2nybvJ44Xl4A8H7Rwzz0dEIv+uAQwa9gdhtrrv4XHnYu/GuExzTwy18CTQtlkjZ7MDbYDr7saeREaSxy8dkxSk47GdKShrqg3tmEXKUepcrp6A4z3a7jXGqTgdRVxLT0YjdLGNzI5uwFjcBRvrvhaw0muyDFSuraKgQvXVUNOo6yyBfrgW/DKiqv7ZxWvmW47iSclf8AYAfnh1NwPh9Kwkho4RIB/wBQpdr69Trg1S6CkRv2nopLjh8NXXNa45FO2U+jNZfniu/EeO1QYQcNpqNLXz1M/Mb/ALUFv9xwbEFvcfvhrw2B9CMDbfLFt6ML2TgreL8Od6ji9esMczRiKOS17aG7/mPpfBum7M8JhkSU0SSzHeWdjK3xa9vlip/DaO/BZv8A5cv1xrhFYDTw+mIhppNlSbvYoxwBVCqoVRbQCw6Y5YQDt4fb9sX+TfT0+2GiK9vO30xrrJAXG+EpxKiZLKJgt0cjbTb0x59W01TS1clPWaSJdfI+niMeumLQny+wxnu2PDqqpgiSkoUnJLhnt3o7kWtjmzY4z3XJcJNOgT2brwtMIaqETRHOFUIDY5R+3XFqNoM+WlJEPMCgbnb44EU3DOLDPTilmXlasuW172H2wb7O8OetlkjByiJtWtoDbGFyklFnQqVsiqpC1GQczAU50J6WOA3YHh8k/FjWLmCxjKW6bY3VRwKCDh9U8rNKVpiRfQbHfxwD/hql+Fuepna5H+kY1xRrkzySvg02SxT0b6jCRwqyAlATbUkXxbMekf8ApP1GGpHdFNunjbHUpGJ5LSZknjEsrrGoDKpJCsBc23Hn8cHOxUqntNxDK6jnBVCGQD9JbRbG/wARud8VRwaPmI/NhiZHupRibAHwO+Jey9XDw3tRxSeUKy2RCQLsQV6G4Hntjzo5Umb6bPRkh8hjNfxJTJ2PrWP9UX/6LglU9pYY0zU0Jb/Xpr7sZTt32h9v7MVkBiyqTEQR1tIp+2LfyIvaxaGaHjHaKPhFQtO1M0pPLJYHa51+WK1N22oJKswSwuiEDI410N73wFlmLTmVWZ2MgZzfUjwHuxNUGgHD5ClNHLUM+RSo/Kg1+p/zTGX9Lvkrxo3cFRSzxLJFMrK/5fjh80YysRqLHHnEVTWI49nzDXRAPsMEDxvjNOkskUDFZibxyQkiM26a3tYeeKh8pPkTxeib+GwccAqGQXtWy39L4Py8TUgCADQ65vC2/wBcYXsHxmop+DTwRCMB6l27wudTqMEKqpqObHKIcpXSxsptY4T+So7IaxXuzZUFaKqRkyAGO2Zr6akYvrCLC22n2xkOG1ywxqZ6Fg6stmWZbAX3Ovl/xixPx9qgKpbIhFio0sdLWOH/AFJLdi8TNNybrt+n7DFLiVQKVggHeYta251xR4VxpKemUV1TFYjU3vbQfLFPitbT1FVpVq1ycxCm47w+WB/JWnZjWLfckqKvlR1UqsykKzFWvfT19MR9gp1SgkzqSzS73v8Ap+eBVdPE9MYUlLSMroZCCL3P7XxLwcpQ0sacxnBkuCq6X8MYvPW6NFHpm04nkl4RWmFs9qVhbzs2Mj/C5S3BWNjfntcW/wDaMXK3iXs9BXL+l6RlAIIGoa2uM5/Dfj0HDuErA6M7GSRybgHQLa3nvjeOdVbInj6R6Ty7iIjYITp7sMWM5FsBt4XwCn7UMtNEY4AJG2JJ20O3jbTEMfbJURRLT9619Gwf1QJ8MjIANYHunqCVucUaAyjiVesbZWfIG0vm7vhfBWGRLEqQe7fMtv3wPo878ar8rFQeXqOvdOPOTlTsostHULJd3S9rgFSfvgX2hM78IqHlyNGALqFKk6jzwcjz5jnQDW9gbknA3tMtuB1VzrlGnXcYUW9SGWIkqlAdZIdRbvRE7j/Vhje1tcCSAjwMTf8AlggssOVVF2RQD3rXHw3xGpVRYMiAeIFzjOUn6GV44KuPUyUwc27oibTXXXNhJDW94GSnXuEn8Fr2/wC7FlO8Ngwublt2wrBgmRQNb5yR8sClvwOzPdnGqUpX9meJV5zBs6kn4gjBJhXsy/iU6sTtkb98VeyqMaWYL3UMrgMTqDc4ONHGqoC5Fx+bqPHT74ucqkxoG5q6Pd6Q63zctz4eeFjfiJty2pCN17hHh54IGMXKBg97alraXGnlhsgWYKpjUBiLi/pr5+uFqKoHxycRbSM0Z8O6bH4nD0/mUmuamQg3N0YHf12vi1yZUXLTiDPlJyk7nS2uFgefLGs0mZsxGfW2/h/n7PV+IRCsPEpUdJGoMqm3fLfEWPvwqT8QppVXNRFVHRHIHuviVy8mRXuYiDdSbFTfoR0GuLENKkRbkQ55WLDTY9dicCyP0UkivW11VNw6pR5KMqI2BCwOCAAdjfALs49clDno44XAlYKJL3BsCdj6Y0FZRVAo6sCnZF9nJawUCwvbrc6YB9kUdoXUkCPMTbSzGw0vjbU9DYOP2Rflk4rCglliod9A5cWBAw1f5q+ph4Wu2hLeGLbUEmdZEcqXXZ1NgbDztbf3646LuAiSnMz9ZLDvaD0xi8n4FFKq4BxPhrBpuHVsY6PTrzU+Vj9cDYamaOvlkgqYWLIgYSHKdLjY/De+mPajSpK6rlL59ADoSRfTU6/3wPr+AUHEJC9RBToCbG8Srpt4XJ2+OOrVfKB410eYTcQq4kBlgVV/qsbX8m2virxbiMdVwioj5bK+Q2F9LDzvjfS9i+EQyPLRJURd0kcuVxce4gD6YB8T7E8XlpKiaiiFTSlCPxVRGIv0fS/T59cH0snxNFCi4nSGIAS5b2Fitr+/FsSxcrPCQ1t9PngXUdna+m7j8MqFsL2hcSED03wOiJgkJhqRG/VHuh0PXoMS8EXwyHFrlGnIkAUGxDHu+Fr9cPK6ErHmyr43A8vnjOCo4jFd1zkMPzgBlPvGmJ6Xi/LjVZE5hAtmvf1xm/jyAXspcU8xuFQVBGYnXU7AYLZql5F/TGv6bm5N9yflbywB4DWU0JqIZ2Jfnt3SgIHxwZk4gs5SOGdD/X9z1/w4icHqbodlgg50smc32t10/Y4UIAQjBVdALAe7W5wkVwiBpCVawsxAzHcW+G+EJzFooEWRETW/eF77E9NsRQ7RDneyZxIGve+XcDrfzw9XMdMjTmQOzEhFXVRf03/fFiBk7hBs1v0MbX8RpriVY4lmMhZQw7o7xFtb269MPYpIdCH5bAvKBswzX0Fvhi5RwqYklX8NSWIbx0OlhvviEJcgNKLjMQxQt1v09Pli/HFm1zBQW0F9DodsEeS9InEnZeGVRLHN7NcH3NjG9jjGaVmdMwVjaw2uB0xteLRtFQVY1t7MdtBqGxjexql6PKcpQSE2vrsPljV/8MKepBhWYapG3KsW1Uk3sNjhyzRqPxV7x11vh1fAhhT8BrmO4CnLfbW/XDVhNszRTOW1zJex+WMZFU0ehvKZHCK+pGYEqV0G41NvDr08sPfRI43bQd2zGwFuunqOnvxC0rxplzM8wIIPQ26DwG3T+zRCEm50aNHFl/WQDkI8vrr+/UIeY0mDPDCzRqLm4+AH+dMNkpgE5lU6oii4UlSoHTU3sR9sSpG8gYtUQuoVVtc5bem+/wBPXDnK87XOSiaMEspJ3AJ89xsNMJoaZTmpRGFuFZGOpUDujzvvbXpjJ9p+xS8WzzwEJOoH4iJpbpmsNemu++NlTOpfMJmGYjKEAve9tj6HfX0uMdkmqo2QqmYOQGBbQadNBvuNbZgOmiSrgpu+Ty6PsFxCBEMdfGJSLsBe3nY7++wxDVdmu0MMyp7D/Mc2zIuZ/eT3red8erLAim3NY5iNyW1Gm40GFgqn4dVM1O6jvZShXRjb4+P98Uskr3JeOLWx4SaZqOaf2ulqYWkla2dMt7HoCPvjsiljy5VzDWzd356j549w4yj8YV14lTwOI7MqZb9QNj98CJ+w/ApE9pSnYNmzELdRa+5APnt9MX5V6M/CeVLFUCLMpflrrdWzLf3YWOsqoTZJ3FtbA2B9fHG24v8Aw+pYpWfh3EGiZVuxf8T11G3UbnAtuyXHRJZJoJowf1+l7d4Zh8cGqDE8UgVDxuoQrzY42T9YRctxb4fLFtOLRF++pRWOYlF8Nv3xQr6SWhlYV1Eyj/1Ir5D9R0PUHFeM00p/DmC6juyLa2viCw+eB4oPglprk1EHEaRwEzSoBc5s3W/hg9CIfZ80JLZQbXPeBtv47WxhoKeV0DRjmIAe9GQ6/EXwf4TKyRhQ1rk6Yh4kuC4h/ivMXh9Uul/Z75RfQZTjGdikQ0zt+EpDtYsAGOgvr4Y0HEuJSpTTxlwwMeQg+h/fGT7NV8MJan/EDglwqnyHj6bYTg9NFXUkzWylY4EancuzLfN4aeuKYWpm7yyQEeJuThtfxGl5kTskqjl2K+JPn/m+IIeL0aRqokEFv0CxGMtEl0NyfZ6BBBWF1llqgQQwMYhzXOU3W21t+o87jDxK4ivIqBVIMfdKl8u12XxPgPiMQTVqLAsNQ/4rPmdYspPW2lrHp98OjnlELulPkByhe/zGv4kgEAm5NtPDzxrZRZmOSIq4ypGhsigkA6a2GtvHx8+ktOcsylYn5mW2Yk2N97C233J8MVzLC1K8nMhVxlt3iZALGwvf83l03ucOhmLQEs7oJLhkdBdzmsCWJ38hrv6YdioeXQOy2MZvlDyIQyD9RzX008PHEkaSsbgshNjmRrZtwN+ux18NtTaABII++8pcoFjcG+o6WNxbr5XxNTEzwMXieBY2bOkobNlHiPPy+eENixyODHc5JASgDNmEh0awBGthc+W+mOgp5Zo0RIuWhF5GlNjvuL7De3XS1t7zExpmkqubIrsNGJsf6d9dSRoOvhjpg0aPadRyyeZkcWuBbLmYXFtNj1tpgoVlcUksuW5lYFu+CLW2AFtdNrkjEscKmqZamJnZLEFU/KQQNdNN/wDLYrVAMcjMpQTM2TQNmUAD8uwIvfbbzxcXnQh0vyJFJIeQ5t+gF7eNz8fHCH0TFTe6OhAzAty7i/Qn3fTEEiQQqjRTZZT+h3G2uvkRrrsMO9qELpBzC7XOVTlv639T6+mI0qwUzlogbWdAQct20AFrnrv78AblOaKOcLLylmQXzIFuBpoDm+l7/DAriHZvhlesntlLTc6Ihc41kJ6m49d720tjSuqrPG8JfmsMwRRYqo0v8Om2mOqJHkoR+AtoVykja9rkeP13OEVZ5XxnsZJQD2rhs7qCoKCY+fRtx8cAk4pxGgm5HEcwZNLSgOLep7x+OPZCtOqGKVYjE1gUyMQSdrj4a9cCOIdlKDiPdeGRipzOQpJF9bePgD0+eKU2uROEWYCp43HXU7iSNcxX80TWO3gen/2JwG4OwirnkeeGONYyAHJFy21ja3xOPcOGcN7Nx0opFoaSJT3WHLF/ed/vilW9g+y3LQpTGEE2WWOdi4PhmudOtjjVTMnF2eZ13MljV0TPGEALx94fEYFOwLaMMani38PKyiqqibhlbHPEsd42cmOQN0XMu+xG4HlgD7D2r6UVU3neJ/mVP1xeuPsnTJ9HpPD5+bfn0skTF7NKpAY6aAkgt01v4eWLMk75kzSTNTEMSM3dkvpqmma+nxxI0SwyUnJLoTLImbMWNkYgam/hr/xi9xGmBomnEkitJK0jAG4JUELv4fXHMrRtsU4hdo4Z1yWCnJF+GRpZV30FupsbnfYYtVFUIQsckE5aX9AGgvc67WbTpt4Yqccmai9i9mATmRI7b7n7a7YmkmnWidUqJl5nIZiHvq7Kp38ththguB1aKieaKKmjWMgFSFNsvjoCTr5aYllqalVFM6gRCLIbG/cIBuLfq/2/DC08rPRPGtkARe8qgtra+pvibiiimmkiTVOWhsx31A1tv4/20wB+DUmRKSpaTK7myQIgVmK+Z69CSdLdD1oys007TLNNUMxWLSS6xsX7oCrcDbUm2nyJ8MUN2cllF0d2Ykhjc6tpcm+tvdc2tpiCOaQ8JimRhGyxiQKqgqGIOtiDt0wySv8AzGsjqJVTLLKCxZ3zgKBqAlxqLE7m1/lOHnkQw1GeXmR90gDf+okXAGvj1064ikqJxC3NlM7JHKxaUAlrXsCAALd47AYbTsKWOWSFBzmChpSSWO9vS3l5+OJ7LrYvtEFn5JULMxGTmtZGN7kWv1PQWvp4YjMckQX2n2aFgj/hoQNr5msu5/Nt4DxwUqFSCCYRxqDDHkVj+Yg5Rqd+pwLlkYVK0aBVQyiIPlBZVY2NidtsUQTGoZTLHEyKrwlkVWAkIHdLHvbabg3viOJKcxsz8uPMQOTazGxAuP7aG+HLEsaSrGSuYAMb3LXtvf1OvngLX8WqI4Zu5E+Zacd8E2DEA218zhclLYNRQQPOs1ZeVXU2uoDHU3NttNN/HEcImikVInZObcqHGgv1B9DipWVLgcPdAqLOWV4x+W1/PFyeqkXh1NVGzSezFyDexLAMfqcJoFLocKTnszOqyEAO+SIrcdfzaE666+mKlQ0szFHijiDMO/GMpGm9ulgfD4YsZlmgizxR3aoWE93ZQtx7+npibhkdlZVdl5MalCLA94tmv43yjfzwc7D/AEFHg9Ss08oZXhiTKjgnOSNRdfdfNf3Ykp/YliC1DmSUaMVMu/u39TgxR0kb8LSouyysgBZbAkXtvv8Aq8fDE09LDHUS2S+Zze5PTTp5AYNIardH/9k=' alt="login form" className='rounded-start w-100'/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">
           OMOYOMI
          </span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Register here</h5>
        <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg"  value={formValues.username} name="username" onChange={handleChange} />

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={formValues.email} name="email" onChange={handleChange}/>
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' type='number' size="lg"  value={formValues.number} name="number" onChange={handleChange} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={formValues.password} name="password" onChange={handleChange} />
          <MDBInput wrapperClass='mb-4' label='Address' id='formControlLg' type='text' size="lg"  value={formValues.address} name="upline" onChange={handleChange} />
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