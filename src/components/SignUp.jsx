import React, { useState } from 'react'
import{ Link} from 'react-router-dom'
import axios from "axios"
const SignUp = () => {
  // initialize hooks-hooks stores user inputs/details
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[password,setPassword]=useState()

  // initialize othef hooks for getting loading, success,error

  const[loading,setLoading]=useState()
  const[success,setSuccess]=useState()
  const[error,setError]=useState()

  // function that will send our data to the database
  // e.preventDefault-prevents refreshing of the page
  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please Wait........")
    // sending data to DB

    try {
    const data =new FormData()
    data.append("username",username)
    data.append("email",email)
    data.append("phone",phone)
    data.append("password",password)
    // call our api

    const response=await axios.post("http://joshuakarbolo.alwaysdata.net/api/signup",data)
    setLoading("")
    setSuccess(response.data.message)






      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
    
  }









  return (
    <div className='row justify-content-center m-top-3'>
      <div className='card shadow col-md-6'>
        <h1>Sign Up</h1>
        <form action="" onSubmit={submit}> 

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>
        <input type="text" placeholder='Enter your username' className='form-control'required value={username} onChange={(e)=>setUsername(e.target.value)}/><br /><br />
        {username}
        <input type="email"placeholder='Enter your Email' className='form-control'required value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
         {email}
        <input type="tel" placeholder='Enter your Phone number' className='form-control'required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br /><br />
        {phone}
        <input type="text,hide"placeholder='Enter your Password' className='form-control'required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br /><br />
        {password}
        <input type="submit"value='SignUp'className='w-100 form-control text-white bg-success' required/>
        <p>Already have an account?<Link to='/signin'> SignIn</Link></p>
        </form>
  





      </div>
      


    </div>
  )
}

export default SignUp