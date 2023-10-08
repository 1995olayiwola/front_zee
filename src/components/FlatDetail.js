import React from "react";
import ImageGallery from 'react-image-gallery';
import Parse from 'parse';
import {useHistory} from 'react-router-dom';
import Loading from './Loading';
import moment from 'moment';



const FlatDetail = (props) => {
    console.log(props)
    const id = props.match.params.id;
    const[loading,setLoading] = React.useState(false);
    const user = Parse.User.current();
    const [data,setData]=React.useState({
        results:[],count:0
      });
    const history = useHistory();
  React.useEffect(()=>{
    const process = async()=>{
      try{
const query = new Parse.Query('Properties');
query.withCount();
query.equalTo('user',user);
query.equalTo('objectId',id)
const records = await query.find();
console.log(records);

 await setData(records)




      }
      catch(err){
alert(err.message)
      }
      
      
    }
    process();
  },[id])

    const images = [
        {
            original: data.results.map((item)=>{
                return item.get('url')
            }),
            thumbnail: data.results.map((item)=>{
                return item.get('url')
            }),
        },
        {
            original: data.results.map((item)=>{
                return item.get('url')
            }),
            thumbnail: data.results.map((item)=>{
                return item.get('url')
            })
        },
        {
            original: data.results.map((item)=>{
                return item.get('url')
            }),
            thumbnail: data.results.map((item)=>{
                return item.get('url')
            }),
        },
    ];
console.log(data)
    return (
        <div className="flat-detail">
             <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">DETAIL</h1>
                           
                            <h2 className="page-description">5 bedroom</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
            {data.results.length>0 && data.results.map((item)=>{
return (
    <div key={item.id}>
<div className="fd-top flat-detail-content">
                            <div>
                                <h3 className="flat-detail-title">{item.get('name')}</h3>
                                <p className="fd-address"> <i className="fas fa-map-marker-alt"></i>
                                {item.get('address')}</p>
                            </div>
                            <div>
                                <span className="fd-price">#{item.get('price')}</span>
                            </div>
                        </div>
                        <ImageGallery flickThreshold={0.50} slideDuration={0} items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} />
    </div>
)
            })}
             
            
                        
                        
                        <div className="row">
                        {data.results.map((item)=>{
                return (
                    <div className="col-lg-8" key={item.id}>
                                
         
                                <div className="fd-item">
                                    <h4>Description</h4>
                                    <p><div dangerouslySetInnerHTML={{__html: item.get('description')}} /></p>
                                </div>
                                <div className="fd-item fd-property-detail">
                                    <h4>Property Details</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Kitchen: </span>
                                            <span>{item.get('kitchen')}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>All Rooms: {item.get('room').value}</span>
                                            <span>{item.get('rooms')}</span>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Kitchen: </span>
                                            <span>1</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>All Rooms: </span>
                                            <span>5</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Kitchen:  </span>
                                            <span>1</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span>Kitchen: </span>
                                            <span>1</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>All Rooms: </span>
                                            <span>5</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <span>Kitchen:  </span>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fd-item fd-features">
                                    <h4>Features</h4>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check"></i>
                                            <span>Property Ref: {item.get('ref')}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Market status: {item.get('status')==='1'? 'Available': 'Not Available'}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Type: {item.get('type')}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Bedrooms: {item.get('bedroom')}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Toilets: {item.get('toilet')}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check"></i>
                                            <span>Bathrooms: {item.get('bathroom')}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Added on: {moment(item.get('createdAt')).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Last Updated: {moment(item.get('updatedAt')).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                        </div>
                                        <div className="col-lg-4">
                                            <i className="fa fa-check" ></i>
                                            <span>Parking space : {item.get('park') ==='1'? 'Available' : 'Not Available'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fd-item">
                                    <h4>Maps</h4>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105200.564429!2d37.91245092855647!3d38.99130948591772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1630158674074!5m2!1str!2str" width="100%" height="450" loading="lazy"></iframe>
                                </div>
                            </div>
                )
            })}
                          
                            <div className="col-lg-4">
                                <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                </div>
                                <div className="fd-sidebar-item">
                                    <h4>Category</h4>
                                    <ul className="category-ul">
                                        <li>Category 1</li>
                                        <li>Category 2</li>
                                        <li>Category 3</li>
                                        <li>Category 4</li>
                                        <li>Category 5</li>
                                    </ul>
                                </div>
                                <div className="fd-sidebar-item">
                                    <h4>Recently Added</h4>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                    <div className="recently-item">
                                        <img src="/img/product1.jpeg" alt="detail" width="50px" />
                                        <span>Lorem Ipsum Dolor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatDetail