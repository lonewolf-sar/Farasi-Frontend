import React from 'react'
import{Link, useNavigate} from 'react-router-dom'
import{ useState } from 'react'
import axios from "axios"

const SignIn = () => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  // initialize our hooks

  const[loading,setLoading]=useState("");
  const[success,setSuccess]=useState("");
  const[error,setError]=useState("");

// a hook used to redirect a user
  const navigate=useNavigate();

  // function to send data to our database
  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait as we upload your data")
    // send data to our database
    try {
      const data=new FormData
      data.append("email",email)
      data.append("password",password)
      // post above data to backend API
      // calling our API

      const response=await axios.post("http://joshuakarbolo.alwaysdata.net/api/signin",data)

      setLoading("")
      // check if response has user item
      if (response.data.user){
        // if user is found,store user details in localstorage
        localStorage.setItem("user",JSON.stringify(response.data.user));
        setSuccess(response.data.message);

        // redirect to /getproducts component
        setTimeout(()=>{
          navigate("/");
        },2000)
      }
      else{
        // user not found ,show error message
        setError(response.data.message);
      }
    

      
    } catch (error) {
      setLoading("")
      setError(error.data.message)

      
    }

  }

  return (
    <div className='row justify-content-center m-top-3'>
      <div className='card shadow col-md-6'>
        <h1>SignIn</h1>
        <form action="" onSubmit={submit}>
         <p className='text-warning'>{loading}</p>
         <p className='text-success'>{success}</p>
         <p className='text-danger'>{error}</p>

         <input type="text"placeholder='Email'className='form-control' required value={email} onChange={(e)=>setEmail (e.target.value)}/>
         {email}

         <input type="text" placeholder='Password' className='form-control'required value={password} onChange={(e)=>setPassword (e.target.value)}/>
         {password}

         <input type="submit"value='SignIn'className='w-100 form-control text-white bg-success'required/>
         
         <p>Don't have an account?<Link to='signup'>SignUp</Link></p>


          




        </form>

      </div>
      
    </div>
  )
}

export default SignIn