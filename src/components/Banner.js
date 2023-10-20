import React, { useEffect, useState } from "react"
import banner from "../banner.jpg"
import { Link } from "react-router-dom";
import Parse from 'parse';
const Banner = () => {
    
{/*const [search, setSearch] = useState();
const [find, setFind] = useState([]);
const [word, setWord] = useState("");*/}
const [keyword,setKeyword] = React.useState('');
const [formValues,setFormValues] = React.useState({
    keyword:''
})
const [data,setData] = React.useState({
    results:[], count:0
})
console.log('keyword is: ',keyword)
React.useEffect(()=>{
    const process = async()=>{
        try{
            const query = new Parse.Query('Properties');
            if(keyword){
                query.matches('name',formValues.keyword? formValues.keyword : keyword,'i');
            } 
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
},[keyword])
   { /*useEffect(() => {
        setSearch(["a","b","test", "mb"])
    }, [])*/}
    const handleSubmit =()=>{
setKeyword(formValues.keyword)
    }
    const handleChange = (e)=>{
setFormValues((fv)=>{
return {
    ...fv,[e.target.name]:e.target.value
}
})
    }
   {/*

 const findSearch = (e) => {
        setWord(e.target.value)
        const filteredCountries = search.filter(item => item.indexOf(e.target.value) > -1 ? item : null);
        e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
    }
    const findResult = () => {
        if (find.length === 0 && word.length > 0) {
            return <div className="find-search">Not Found</div>
        }
        if (find.length > 0) {
            return <div className="find-search">
                {
                    find.map(item => {
                        return <Link key={item} to="#">{item}</Link>
                    })
                }
            </div>
        }
    }*/}
    
   
    console.log(formValues)
    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Find a newly built home</p>
                                <h2 className="mt-2 mb-4 banner-title"><strong> Search keyword</strong> </h2>
                                <div className="search-area">
                                    <input value={formValues.keyword} name="keyword" onChange={handleChange} type="text" className="inp-search" placeholder="Search" />
                                    <button className="btn-search m-2" onClick={handleSubmit}>Search by category</button>
                                {
                                 keyword.length >0 && (
                                    <div>
                                        {data.results.map((item)=>{
                                            console.log(item)
                                            return (
                                                <div key={item.id} style={{
                                                    display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'
                                                }}><Link to={`/flat/${item.id}`}>{item.get('name')}</Link></div>
                                            )
                                        })}
                                    </div>
                                 )   
                                }
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;