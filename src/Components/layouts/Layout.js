import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from "../Card"
import Store from "../Store"

const Layout = () => {
  return (
    <div>
         <Store/>
         <Card/>
         <main>
            <Outlet/>

         </main>
    </div>
  )
}

export default Layout