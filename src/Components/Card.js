import React, { useContext, useEffect, useState } from 'react'
import "./Card.css"
import { AppContext } from '../context/appContext'
import axios from 'axios'

const Card = () => {
const {globalSearchData,category} = useContext(AppContext)
const[data, setData] = useState([])
useEffect(()=>{
    let flag = true
    async function fetchData(){
      try{
          let url = `http://localhost:5000/apps`
          if(category && category !== "All+Apps"){
            url += `?category=${category}`;
          }
          const fetchApps = await axios.get(url)
          if (flag){
            setData(fetchApps.data)
          }
      }
      catch(err){
          console.error("error in fetching data", err);
          
      }
    }  
    fetchData()
    return ()=>{
      flag = false
    }  
},[category])

const searchData = data.filter((element)=>
    element.name.startsWith(globalSearchData)  ||  element.name.startsWith(globalSearchData.toUpperCase())
)


  return (
    <div className='card-container'>
      {
        searchData.map((app)=>(
          <div className="cards" key={app.id}>
          <img src={app.image} alt={app.name} width={100} height={100}/>
          <p>{app.name}</p>
      </div>
        )
            
        )
      }
       
    </div>
  )
}

export default Card