import React from 'react';
import Input from './widgets/Input';
import ReactTextArea from './widgets/ReactQuill'
import RichTextarea from './widgets/ReactQuill';
import ReactSelect from './widgets/ReactSelect';
import Parse from 'parse';
import Loading from './Loading';
import Button from 'react-bootstrap/Button';
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

const Upload = () => {
    const tableName = 'Cart';
    const [loading,setLoading]=React.useState(false);
    const [formValues,setFormValues]=React.useState({
        name:'',type:'',price:'',url:'',description:''
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
post.set('user',user)
post.set('description',formValues.description);
setLoading(true);
post.setACL(acl);
await post.save();
setLoading(false);

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
  return (
    <div>
<Input type='text' placeholder='Enter product name' title='Product Name' name='name' value={formValues.name} handleChange={handleChange} />
<Input type='text' placeholder='Enter product type' title='Product Type' name='type'value={formValues.type}  handleChange={handleChange}/>
<Input type='number' placeholder='Enter product price' title='Product Price' name='price' value={formValues.price}  handleChange={handleChange}/>
<ReactSelect onClick={handleChange} options={options} />
<RichTextarea type='text' placeholder='Enter product description' name='description' value={formValues.description} title='Product Description' handleChange={(value)=>{handleChange({target:{name:'description',value}})}} />

        <input type='file' onChange={handleSelect}/>
        <img src={dataUrl} alt='200 Note'/>
       <Button variant="primary"onClick={handleSubmit}style={{width:'50%'}}>Upload file</Button>
       <Button onClick={handleCopy} style={{backgroundColor:'blue',border:'2px solid blue',borderRadius:'20px',color:'white'}}>Copy image url</Button>
        <p>{dataUrl}</p>
        <Input type='text' className="url" placeholder='Enter product image url' title='Product Image URL'  name='url' value={formValues.url}  handleChange={handleChange}/>
       <Button variant="primary" onClick={handleSubmitData} style={{width:'100%'}}>Add product</Button>{' '}
    </div>
  )
}

export default Upload