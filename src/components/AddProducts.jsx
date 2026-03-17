import React from 'react'
import{Link, useNavigate} from 'react-router-dom'
import{ useState } from 'react'
import axios from "axios"
const AddProducts = () => {
  const[product_name,setProduct_name]=useState();
  const[product_description,setProduct_description]=useState();
  const[product_cost,setProduct_cost]=useState();
  const[product_photo,setProduct_photo]=useState();
 // initialize other hooks for getting loading, success,error

  const[loading,setLoading]=useState();
  const[success,setSuccess]=useState();
  const[error,setError]=useState();



  const submit=async(e)=>{
    e.preventDefault()
    setLoading("product added successfully")

    try {
      const data=new FormData();
      data.append("product_name",product_name);
      data.append("product_description",product_description);
      data.append("product_cost",product_cost);
      data.append("product_photo",product_photo);

      const response=await axios.post("http://joshuakarbolo.alwaysdata.net/api/addproducts",data)

      setLoading("")
      setSuccess(response.data.message)
      setProduct_name("")
      setProduct_description("")
      setProduct_cost("")
      setProduct_photo("")
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
  }


  return (
    <div className='row justify-content-center m-top-3'>
      <div className='card shadow col-md-6'> 
        
        <form action="" onSubmit={submit}>
          <h1>Upload your Products</h1>
          <p className='text-warening'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="text" placeholder='Enter Product Name'className='form-control'required value={product_name}onChange={(e)=>setProduct_name(e.target.value)}/> <br /> <br />
  

          <input type="text" placeholder='Describe your Product'className='form-control'require value={product_description} onChange={(e)=>setProduct_description(e.target.value)}/> <br /> <br />
          <input type="number" placeholder='Enter Product Cost' className='form-control'required value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)}/> <br /> <br />

          

          <h2>Upload Product Photo</h2>

          <input type="file"className='form-control' accept="image/*"onChange={(e)=>setProduct_photo(e.target.files[0])} required/>
          
          <input type="submit"value='Upload Product'className='form-control bg-success text-white w-100'/>



        



        </form>

      </div>
        
    </div>
  )
}

export default AddProducts