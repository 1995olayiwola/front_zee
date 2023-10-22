import React from 'react';
import Title from "./Title"
import FlatItem from "./FlatItem"
import Parse from 'parse';
import {useHistory, Link} from 'react-router-dom';

const FlatList = (props) => {
    const user = Parse.User.current();
    const [data,setData]=React.useState({
      results:[],count:0
    });
   //const id = props.match.params.id;
   const history = useHistory();
    React.useEffect(()=>{
      const process = async()=>{
        try{
  const query = new Parse.Query('Properties');
  query.withCount();
  query.ascending('createdAt');
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
    
  
  console.log(data);
    const title = {
        text: "Newly built duplex",
        description: "Lorem ipsum dolor sit ame"
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                {
                        
                        data.results.length>0 && data.results.map((item)=>{
                  return (
                    <div className="text-center col-lg-4 col-12 col-md-6 " key={item.id}>
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src={item.get('url')} alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title"><div dangerouslySetInnerHTML={{__html: item.get('description')}} /></span>
                        <span className="item-price">#{item.get('price')}</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span>{item.get('name')}</span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span> {item.get('type')}</span>
                        </div>
                        <Link to={`/flat/${item.id}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
                  )})
                  
                  }
                 </div> 
              
            </div>
        </section>
    )

}

export default FlatList;