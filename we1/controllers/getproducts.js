const pr=require('../models/product')
async function getproducts(req,res)
{
    console.log("permissions")
    console.log(req.permissions)
    if(req.permissions.indexOf('view-product') === -1)
    {
      return  res.send({code:'404',message:'unauthenticated'})
    }

    const data= await pr.find({})
    if(data.length>0)
    {
        res.send({code:'200',message:'products fetched',data:data})
    }
    else if(data.length==0)
    {
        res.send({code:'404',message:'not found '})
    }
    else{
        res.send({code:'500',message:'error'})
    }

    }
module.exports={getproducts}