const user=require('../models/user')
const Role=require('../models/role')
async function signup(req,res)
{
  const Username=req.body.Username 
  const Password=req.body.Password
  const confirm=req.body.confirm
  const type=req.body.type    
  const contact=req.body.contact
  const roledata=await Role.findOne({role:type})
  console.log(roledata)
  const roles=[roledata._id]
  if(!Username)
  {
    alert("name required")
    res.send({code:400,message:'name required'})
  }
  else if(!Password)
  {
    alert("password required")
    res.send({code:400,message:'password required'})
  }
  else{
    const newuser= await new user({Username,Password,confirm,type,contact,roles})
    const saved=newuser.save()
    if(saved)
    {
        res.send({code:200,message:'saved'})
    }
    else{
        res.send({code:404,message:'error'})
    }
  }
}
module.exports={signup}