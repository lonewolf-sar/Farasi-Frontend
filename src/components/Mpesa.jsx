import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Mpesa = () => {
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  const[phone,setPhone]=useState("")
  const[amount,setAmount]=useState("")
  const{product}=useLocation().state || {}

  // function to submit our data to api
  const submit= async(e)=>{
    e.preventDefault()
    setLoading("Please wait as we process your payments")
    
    try {
      const data=new FormData();
      data.append("phone",phone)
      data.append("amount",product.product_cost)

      const response=await axios.post("http://joshuakarbolo.alwaysdata.net/api/mpesa_payment",data)
      console.log("The response is",response);
      setLoading("")
      setSuccess(response.message)
    } catch (error) {
      setError(error.message)
      
    }

  }
  return (
    <div className='row justify-content-center'>
        <h1>Mpesa payments-Lipa na Mpesa</h1>
        <p className='text-success'>{product.product_name}</p>
        <p className='text-secondary'>{product.product_description}</p>
        <p className='text-info'>{product.product_cost}</p>
        <div className='col-md-3'>
           <form action="" onSubmit={submit}>
            <p className='text-warning'>{loading}</p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p> 

            
            <input type="tel" className='form-control' placeholder='Enter phone number starting with 254' value={phone}onChange={(e)=>setPhone(e.target.value)}/> <br /> <br />
            <input type="submit"  className='btn btn-secondary w-100' value="Make Payments" />



          </form>

        </div>
    </div>
  )
}

export default Mpesa