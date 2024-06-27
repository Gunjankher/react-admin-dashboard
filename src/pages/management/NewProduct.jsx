import React, { useState } from 'react'
import AdminSideBar  from '../../components/AdminSideBar'

function NewProduct() {
 
  const [name,setName] = useState("")
  const [price,setPricce] = useState()
  const [stock,setStock] = useState()
  const [photo,setPhoto] = useState("")


  return (
    <div className='adminContainer'>
      <AdminSideBar />
      <main className='product-management'>

<article>
<form>
<h2>New Product</h2>
<div>
  <label> Name</label>
<input 
type="text"
placeholder = "Name"
/>
</div>



</form>
</article>



      </main>
      
      </div>
  )
}

export default NewProduct