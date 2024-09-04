import React, { useState } from "react";
import {AppContext} from "../src/context/appContext"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/layouts/Layout";


function App() {
  
  const[globalSearchData, setGlobalSearchData] = useState("")
  const [category,setCategory] = useState("All+Apps")

  function handleGlobalSearchData(AppSearch){
      setGlobalSearchData(AppSearch)
  }

  
  
  function handleCategory(AppType){
      setCategory(AppType)
  }



  return (
    <div className="App">
     <AppContext.Provider value = {{globalSearchData,category,handleCategory,handleGlobalSearchData}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        
        </Route>
      </Routes>
      </BrowserRouter>
     </AppContext.Provider>
    </div>
  );
}

export default App;