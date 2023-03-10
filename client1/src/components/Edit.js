import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import Nav from '../components/Nav'

function Edit()
{
    const navigate=useNavigate()
    const params=useParams()
    const[id,Setid]=useState('')
    const[name,Setname]=useState('')
    const[quant,Setquant]=useState('')
    const headers={Authorization:localStorage.getItem('token')}
    // console.log(headers)
    useEffect(()=>
    {
        const id=params.id
        axios.get(`http://localhost:5000/getproduct/${id}`)
        .then((res)=>
        {
            // console.log(res)
            Setid(res.data.data.id)
            Setname(res.data.data.name)
            Setquant(res.data.data.quant)
        })
        .catch((res)=>
        {
            console.log("error")
        })
    },[])
    const handlesubmit=(e)=>
    {
         const id=params.id
          e.preventDefault()
           const data={id:params.id,name,quant}
          axios.post("http://localhost:5000/edit",data)
          .then((res)=>
          {
             console.log(res)
             if(res.data)
             {
                navigate('/products')
             }
          })
          .catch((res)=>
          {
            console.log('error')
          })
    }
    return(
        <div>edit page
            <div>
                <Nav/>
            </div>
            <div>
             <form>
            Id:  <input type='text' value={id} onChange={(e)=>
            {
                Setid(e.target.value)
            }}></input><br/><br/>
            Name:<input type='text' value={name} onChange={(e)=>
            {
                Setname(e.target.value)
            }}></input><br/><br/>
             Quantity: <input type='text' value={quant} onChange={(e)=>
            {
                Setquant(e.target.value)
            }}></input><br/><br/>
            <button onClick={handlesubmit}>submit</button>
            </form>
            </div>



        </div>
    )
}
export default Edit