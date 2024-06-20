import React from 'react'


import AdminSideBar from '../components/AdminSideBar'
import Input from "../components/Input"
import Widget from '../components/Widget'

import userImg from "../assets/profile.jpg"
import {FaRegBell} from "react-icons/fa"
import {BsSearch} from "react-icons/bs"

function DashBoard() {
const userImg = "img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"

  return (
    <div className='adminContainer'>
<AdminSideBar/>
<main className='dashboard'>
<div className='bar'>
<BsSearch />
<Input
type ="text"
placeholder = "Search for data,users,docs"
/>
<img src={userImg} alt="" />
<FaRegBell />

</div>

<section className='WidgetContainer'>

<Widget  
 heading="Revenue"
 value={1000000}
 percent={30}
 color="green"
 amount={500}

/>
<Widget  
 heading="Revenue"
 value={1000}
 percent={30}
 color="green"
 amount={500}

/>
<Widget  
 heading="Revenue"
 value={1000}
 percent={30}
 color="green"
 amount={500}

/>
<Widget  
 heading="Revenue"
 value={100000}
 percent={30}
 color="green"
 amount={500}

/>


</section>

</main>

    </div>
  )
}

export default DashBoard 