import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const GetProducts = () => {

  // initialize our hooks
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])
  const navigate=useNavigate()

  const image_url="http://joshuakarbolo.alwaysdata.net/static/images/"
  // function to fetch data from api
  const fetchProducts=async()=>{
    setLoading("Please wait as we retrieve your products")
    try {
    const response=await axios.get("http://joshuakarbolo.alwaysdata.net/api/getproductdetails")
    console.log("the response is",response);
    
    setProducts(response.data)
    setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
    // calling our api

  

  }
  // end of function we call use effect
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='row'>
        <h1>Available Products</h1>
        <p className='text-warning'>{loading}</p>
        <p className='text-danger'>{error}</p>
        {/* calling .map to iterate through each item */}
        {products.map((product)=>(

       
        <div className='col-md-3 justify-content-center'>
          <div className='card shadow mt-5'>
            <img src={image_url+product.product_photo} alt= "cake" className='product_img mt-3' />
            <div className='card-body'>
              <h5 className='text-success'>{product.product_name}</h5>
              <p className='text-secondary'>{product.product_description}</p>
              <p className='text-info'>{product.product_cost}</p>
              <input type="button" className='btn btn-secondary w-100' value="Purchase Now" onClick={()=>navigate("/mpesa",{state:{product}})}/>

            </div>

          </div>

        </div> 
      ))}

    </div>
  )
}

export default GetProducts