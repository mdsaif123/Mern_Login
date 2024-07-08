
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import axios from 'axios';




const Login = () => {

    const [user,setuser]=useState({
        email:"",
        password:""
     
       })
   
       const handleChange=(e)=>{
           const {name,value}=e.target
           setuser({
               ...user,
               [name]:value
           })
       }
       const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", user);
            console.log(response.data); // Handle response from server
            alert("Login successful");
     
        } catch (error) {
            console.error("Error:", error);
            alert("Login failed");
        }
    }
   
  
  return (
   
    <div>
     <Home/>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-offset-6 mx-auto">
            <h1 className='text-center'>Login</h1>


            <form action="" onSubmit={handleSubmit}>
            <input type="email"name="email" value={user.email} placeholder="Enter Your Email" className="form-control my-3" onChange={handleChange} />
            <input type="password"name="password" value={user.password}   placeholder="Enter Your Password" className="form-control"  onChange={handleChange}/>
              <button type="submit" className="btn btn-primary w-100 my-3">Login</button>
              <p className="text-center">OR</p>
              <Link to="/register" className="btn btn-primary w-100">SignUp</Link>
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Login