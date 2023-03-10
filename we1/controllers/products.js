const pr=require('../models/product')
async function products(req,res)
{
//   const data1=[
//         {
//             id:'1',
//         name:'MAZE',
//         quant:'200'
//         },
//         {
//             id:'2',
//             name:'wheat',
//         quant:'200'
//         },
//         {
//             id:'3',
//             name:'cotton',
//         quant:'2000'
//         },
//         {
//             id:'5',
//             name:'tomato',
//         quant:'1200'
//         },
//         {
//             id:'6',
//             name:'potato',
//         quant:'2100'
//         },
//         {
//             id:'7',
//             name:'leafs',
//             quant:'100'
//         }
// ]
  const data=req.body
  console.log(data)
  // if(req.permissions.indexOf('add-product') === -1)
  // {
  //   return  res.send({code:'404',message:'unauthenticated'})
  // }
  const newpr=new pr(data)
   const saved=await newpr.save()
  //  const data1=pr.find({})
  //  console.log("permissions are")
  //  console.log(req.permissions)
  res.send({code:'200',message:'products addes'})
}
module.exports={products}