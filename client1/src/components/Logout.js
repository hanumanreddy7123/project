import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout()
{
    const navigate=useNavigate()
    useEffect(()=>
    {
        localStorage.clear()
        navigate('/login')   
    },[])
    return(
         <div>Logout Successful</div>
    )
}
export default Logout