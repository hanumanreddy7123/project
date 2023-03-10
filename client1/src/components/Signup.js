import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Signup()
{
    const navigate=useNavigate('')
    const [name,Setname]=useState('')
    const[password,Setpassword]=useState('')
    const [confirm,Setconfirm]=useState('')
    const [type,Settype]=useState('')
    const[contact,Setcontact]=useState('')
    const handleLogin=(e)=>
    {
      e.preventDefault()
      const data={Username:name,Password:password,confirm:confirm,type:type,contact:contact}
      try{
      if(!data.Username)
      {
        alert("PLEASE ENTER THE USERNAME")
      }
      else if(!data.Password)
      {
        alert("PLEASE ENTER THE PASSWORD")
      }
      axios.post("http://localhost:5000/signup",data)
      .then((res)=>
      {
        console.log(res.data)
        if(res.data.code === 200)
        {
        navigate('/login')
        }
      })
      .catch((res)=>
      {
        console.log("error")
      })
    }catch(err)
    {
      console.log(err)
    }
    }
    return(
        <div>
         UserName:  <input type='text' value={name} onChange={(e)=>
          {
               Setname(e.target.value)
          }}></input><br/><br/>
        Password:  <input type='password' value={password} onChange={(e)=>
          {
            Setpassword(e.target.value)
          }}></input><br/><br/>
           confirm:  <input type='password' value={confirm} onChange={(e)=>
          {
            Setconfirm (e.target.value)
          }}></input><br/><br/>
           type:  <input type='password' value={type} onChange={(e)=>
          {
            Settype (e.target.value)
          }}></input><br/><br/>
           contact:  <input type='password' value={contact} onChange={(e)=>
          {
            Setcontact (e.target.value)
          }}></input><br/><br/>
            <button className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={handleLogin}>SIGNUP</button><br/>
            <Link to='/login'>Login</Link>
        </div>
    )
}