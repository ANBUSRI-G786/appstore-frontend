import React, { useContext, useState } from 'react'
import "./Store.css"
import { AppContext } from '../context/appContext'
const Store = () => {
const {handleGlobalSearchData,handleCategory} = useContext(AppContext)
const [searchData, setSearchData] = useState("")


function handleSearch(e){
    const App = e.target.value
    setSearchData(App)
    handleGlobalSearchData(App)
  }


  return (
    <div>
        <div className="storeApps">
            <input className='search' type="search" placeholder='Search..' onChange={handleSearch} value={searchData}/>
            <div className="collections">
                <p onClick={() => handleCategory("All+Apps")}>All Apps</p>
                <p onClick={() => handleCategory("Socialmedia")}>Socialmedia</p>
                <p onClick={() => handleCategory("games")}>Games</p>
                <p onClick={() => handleCategory("News")}>News</p>
                <p onClick={() => handleCategory("Food+Delivery")}>Food</p>
                {/* <p>BookingApps</p>
                <p>Fitness</p>
                <p>Photography</p> */}
            </div>
        </div>
    </div>
  )
}

export default Store