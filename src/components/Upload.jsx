import React from 'react';
import Input from './widgets/Input';
import ReactTextArea from './widgets/ReactQuill'
import RichTextarea from './widgets/ReactQuill';
import ReactSelect from './widgets/ReactSelect';
import Parse from 'parse';
import Loading from './Loading';

import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
const options = [
    {
      value: '5 bedroom flat',
      label: '5 bedroom flat'
    },
    {
      value: '4 bedroom flat',
      label: '4 bedroom flat'
    },
    {
      value: '3 bedroom flat',
      label: '3 bedroom flat'
    },
    {
        value: '2 bedroom flat',
        label: '2 bedroom flat'
      },
      {
        value: '1 bedroom flat',
        label: '1 bedroom flat'
      }
  ];

const Upload = (props) => {
    const tableName = 'Properties';
    const history = useHistory();
    const [loading,setLoading]=React.useState(false);
    const [formValues,setFormValues]=React.useState({
        name:'',type:'',price:'',url:'',description:'',
        ref:'',status:'',bedroom:'', toilet:'',bathroom:'',park:'',rooms:'',kitchen:'', location:'',video:''
    })
    const [selectedFile,setSelectedFile]=React.useState(null);
    const [dataUrl,setDataUrl] = React.useState('');
    const handleSelect = (e)=>{
        setSelectedFile(e.target.files[0]);
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
       if(name==='description'){
formValues.description = value;
       }
       else{
        setFormValues((fv)=>{
            return {
                ...fv,[name]:value
            }
        })
            };
       }

    const handleDescription = (name,value)=>{
setFormValues((fv)=>{
return {
    ...fv,[name]:value
}

})
    }
   
    const handleSubmitData = async()=>{
        try{
            const user = Parse.User.current();
const Post = Parse.Object.extend(tableName);
const post = new Post();
const acl = new Parse.ACL();
acl.setPublicReadAccess(true);
acl.setWriteAccess(user,true);
post.set('name',formValues.name);
post.set('type',formValues.type);
post.set('price',formValues.price);
post.set('url',formValues.url);
post.set('room',formValues.room);
post.set('user',user)
post.set('description',formValues.description);
post.set('ref',formValues.ref);
post.set('status',formValues.status);
post.set('bedroom',formValues.bedroom);
post.set('toilet',formValues.toilet);
post.set('bathroom',formValues.bathroom);
post.set('park',formValues.park);
post.set('rooms',formValues.rooms);
post.set('kitchen',formValues.kitchen);
post.set('location',formValues.location);
post.set('video',formValues.video);
setLoading(true);
post.setACL(acl);
await post.save();
setLoading(false);
alert('New properties uploaded and save successfully')
 history.push('/')

        }
        catch(err){
alert(err.message)
        }
    };
    const handleSubmit = ()=>{
        const file = selectedFile;
        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset','olatech');
        fetch('https://api.cloudinary.com/v1_1/olatechbus/image/upload',{
            method:'POST',
            body:formData
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            setDataUrl(data.url);
        }).catch(err=>{
            alert(err.messsage)
        });
    }
    console.log(dataUrl)
    console.log(formValues);
    const handleCopy = ()=>{
        
       navigator.clipboard.writeText(dataUrl).then(()=>{
        console.log(dataUrl)
       }).catch((err)=>{
alert(err.message)
       });

        alert('image url copied successfully')
    }
    const handleSelectData = (name,e)=>{
        console.log(e)
        setFormValues((fv)=>{
            return {
                ...fv,[name]:e
            }
        })

    }
    console.log(formValues);
  return (
    <div>
<Input type='text' placeholder='Enter properties name' title='Properties Name' name='name' value={formValues.name} handleChange={handleChange} />
<Input type='text' placeholder='Enter propertiestype' title='Properties Type' name='type'value={formValues.type}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter properties price' title='Properties Price' name='price' value={formValues.price}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter properties reference number' title='Properties Reference Number' name='ref' value={formValues.ref}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter 1 0r 0, if the properties is available enter 1' title='Properties Market Status' name='status' value={formValues.status}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter Number of bedrooms' title='Number of bedrooms' name='bedroom' value={formValues.bedroom}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter Number of Toilets' title='Number of toilets' name='toilet' value={formValues.toilet}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter 1 if available or 0 if not available' title='Parking space' name='park' value={formValues.park}  handleChange={handleChange}/>
<Input type='text' placeholder='Enter Address or location' title='Address or location' name='location' value={formValues.location}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter Number of Rooms' title='All rooms' name='rooms' value={formValues.rooms}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter Number of Kitchen' title='Kitchen' name='kitchen' value={formValues.kitchen}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter Number of bathrooms' title='Bathroom' name='bathroom' value={formValues.bathroom}  handleChange={handleChange}/>
<Input type='text' placeholder='Enter Video URL' title='Video URL' name='video' value={formValues.video}  handleChange={handleChange}/>
<ReactSelect handleChange={handleSelectData.bind(this,'room')} options={options} name="room" title="Availabe room"/>
<RichTextarea type='text' placeholder='Enter properties description' name='description' value={formValues.description} title='Properties Description' handleChange={(value)=>{handleChange({target:{name:'description',value}})}} />

        <input type='file' onChange={handleSelect}/>
        <img src={dataUrl} alt='200 Note'/>
       <Button variant="primary"onClick={handleSubmit}style={{width:'50%'}}>Upload file</Button>
       <Button onClick={handleCopy} style={{backgroundColor:'blue',border:'2px solid blue',borderRadius:'20px',color:'white'}}>Copy image url</Button>
        <p>{dataUrl}</p>
        <Input type='text' className="url" placeholder='Enter product image url' title='Product Image URL'  name='url' value={formValues.url}  handleChange={handleChange}/>
       <Button variant="primary" onClick={handleSubmitData} style={{width:'100%'}}>Add properties</Button>{' '}
    </div>
  )
}

export default Upload