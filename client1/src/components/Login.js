import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login()
{
    const navigate=useNavigate('')
    const [name,Setname]=useState('')
    const[password,Setpassword]=useState('')
    const handleLogin=(e)=>
    {
      e.preventDefault()
      const data={Username:name,Password:password}
      axios.post("http://localhost:5000/login",data)
      .then((res)=>
      {
        console.log(res.data)
        localStorage.setItem('token' ,res.data.token)
        localStorage.setItem('user',JSON.stringify (res.data.user))
        localStorage.setItem('userid',res.data.user._id)
        localStorage.setItem('actions',JSON.stringify(res.data.user.roles))
        // localStorage.setItem('rl',res.data.permissions.role)
        // console.log(res.data.user.type)
        // if(res.data.user.type === "user")
        // {
        // navigate('/home')
        // }
        // if(res.data.user.type === "seller")
        //{
        navigate('/products')
        //}

      })
      .catch((res)=>
      {
        console.log("error")
      })
    }
    return(
        <div>
         UserName:  <input type='text' className='mt-2 text-sm text-green-600 dark:text-green-500' value={name} onChange={(e)=>
          {
            Setname(e.target.value)
          }}></input><br/><br/>
        Password:  <input type='password' value={password} onChange={(e)=>
          {
            Setpassword(e.target.value)
          }}></input><br/><br/>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"' onClick={handleLogin}>Login</button><br/>
            <Link to='/signup'>Signup</Link>
        </div>
    )
}