const roles=require('../models/role')
module.exports.addrole=async (req,res)=>
{
    // const role=req.body.role
    // const permissions=req.body.permissions
    // const newrole=await new roles({role,permissions})
    // const saved=await newrole.save()
    const {role,permissions} = req.body
    const newRole = await roles.create({role,permissions})
    return res.json(newRole)
    // if(saved)
    // {
    //     res.send({code:200,message:'role added',data:newrole})
    // }
    // else{
    //     res.send({code:500,message:'error'})
    // }
}
module.exports.deleterole=(req,res)=>
{
   res.send({code:200,message:'role deleted'})
}