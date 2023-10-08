import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title"
import BestFlatItem from "./BestFlatItem";
import {Link, useHistory} from "react-router-dom";
import Parse from 'parse';


const BestFlatList= ()=>{
    const [data,setData]=React.useState({
        results:[],count:0
      });
     //const id = props.match.params.id;
     const history = useHistory();
      React.useEffect(()=>{
        const process = async()=>{
          try{
    const query = new Parse.Query('Properties2');
    query.withCount();
    
    const records = await query.find();
    console.log(records);
    
    await setData(records);
    console.log(records)
    
          }
          catch(err){
    alert(err.message)
          }
          
          
        }
        process();
      
      },[]);
   
        const title = {
            text: "Affordable houses",
            description: "Find your comfortable home here"
        }
        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        }
        return (
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                            {data.results.length>0 && data.results.map((item)=>{
                                return (
                                    <div className="best-estate" key={item.id}>
                                    <div className="best-estate-item">
                                    <Link to={`/bestflat/${item.id}`}>
                                        <div className="best-estate-img-area">
                                        
                                            <img className="best-estate-img" src={item.get('url')} alt="flat" />
                                            <div className={`best-estate-state ${item.get('room').value ==="For rent" ? "bg-green" : "bg-red" }`}>{item.get('room').value }</div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4>{item.get('name')}</h4>
                                            <span><div dangerouslySetInnerHTML={{__html: item.get('description').slice(0,100)}} /></span>
                                        </div>
                                        </Link>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>{item.get('rooms')} Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>{item.get('bathroom')} Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">#{item.get('price')}</h5>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                               
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    
}

export default BestFlatList;