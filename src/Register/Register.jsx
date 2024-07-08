


import React, { useState } from 'react';
import Home from '../Home/Home';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
            try {
                const response = await axios.post("http://localhost:5000/register", user);
                console.log(response.data); // Handle response from server
                // alert("Registration successful");
                toast.success("Registration Successfull")
            } catch (error) {
                console.error("Error:", error);
                // alert("User Already Exist");
                toast.error("user Already Exist")
            }
      
    }
   

    return (
        <div>
         
            <Home />
          
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-offset-6 mx-auto">
                        <h1 className='text-center'>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" value={user.name} placeholder="Enter Your name" className="form-control my-3" onChange={handleChange}  required/>
                            <input type="email" name="email" value={user.email} placeholder="Enter Your Email" className="form-control my-3" onChange={handleChange} />
                            <input type="password" name="password" value={user.password} placeholder="Enter Your Password" className="form-control" onChange={handleChange} />
                            <input type="password" name="cpassword" value={user.cpassword} placeholder="Enter Your Confirm Password" className="form-control my-3" onChange={handleChange} />
                            <button type="submit" className="btn btn-primary w-100 my-3">SignUp</button>
                            <p className="text-center">OR</p>
                            <button className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
     
    );
}

export default Register;
