import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch  } from 'react-redux'
import { setAuthUser } from '../redux/userSlice'
export const Login= () => {

  const [user, setUser] = useState({
  
    username: "",
    password: "",
   
  })
  const dispatch = useDispatch();
 const nevigate = useNavigate();
  const onSubmitHandler =async (e) => {
    e.preventDefault();

    try {
      //call api
      const res = await axios.post('http://localhost:8030/api/v1/user/login', user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      
         nevigate("/");
       dispatch(setAuthUser(res.data));
      
    }
    catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
    
      username: "",
      password: "",
     
    })
  }

  
  return (
   <div className='max-w-96 mx-auto '>
    <div className='w-full p-6 bg-white-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white'>
      <h1 className='text-3xl font-bold text-center'>Login</h1>
      <form  onSubmit={onSubmitHandler} action="">
      

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username </span>
          </label>
          <input   
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="w-full input input-bordered h-10
          " type="text"
          placeholder='Username Name' />
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full input input-bordered h-10
          " type="text"
          placeholder='Password' />
        </div>

        
        <p className='text-center my-2'>Don't have an account?<Link to="/Signup">Signup</Link>
        </p>
      <div><button type='submit' className="btn btn-block btn-sn nt-2 border border-state-700">Login</button></div>
         

        
        
      </form>
    </div>
   </div>
  )
}

