const jwt=require('jsonwebtoken')
const auth=async (req,res,next)=>
{
   console.log(req.headers)
   try{
       if(!req.headers.authorization)
       {
        return res.send({code:403,message:'unauthorized user'})
       }
       const decodeuser= await jwt.verify(req.headers.authorization,'mykey')
       console.log(decodeuser)
       if((Date.now()/1000)>=decodeuser.exp)
       {
            return res.send({code:403,message:'token expired'})
       }
      req["user"]=decodeuser
      req["permissions"]=decodeuser.role[0].permissions
      console.log(decodeuser.role[0])

       next()
   }catch(err){
    console.log(err)
    return res.send({code:403,message:'token expired'})
   }


}
module.exports={auth}