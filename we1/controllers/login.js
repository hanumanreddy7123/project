const user=require('../models/user')
const jwt=require('jsonwebtoken')
const Role=require('../models/role')
async function login(req,res)
{
    const name=req.body.Username
    const password=req.body.Password
    // const confirm=req.body.confirm
    if(!name)
    {
        res.send({code:400,message:'name required'})
    }
    else if(!password)
    {
        res.send({code:400,message:'password required'})
    }
    else{
        const exists= await user.findOne({Username:name}).populate('roles')
        const role=exists.roles
        // const permissions=await Role.findOne({role:role}).populate('roles')
        // console.log(permissions)
        if(exists)
        {
    
            // res.send({code:200,message:'name found'})
            if(exists.Password === req.body.Password )
            {
                const token=jwt.sign({expAfter:Math.floor(Date.now()/1000)+(60*60),Username:exists.Username,Password:exists.Password,type:exists.type,role:exists.roles},'mykey',{expiresIn:'10m'})
                res.send({code:200,message:'login success' ,token:token,user:exists})
            }
            else{
                res.send({code:400,message:'password not matching'})
            }
        }
        else{
            res.send({code:404,message:'name not found'})
        }
    }
}
module.exports={login}