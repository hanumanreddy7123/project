const express=require('express')
const req = require('express/lib/request')
const cors=require('cors')
const db=require('./db')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const {login}=require('./controllers/login')
const {products}=require('./controllers/products')
const {getproducts}=require('./controllers/getproducts')
const {getproductbyid}=require('./controllers/productbyid')
const { editproducts } = require('./controllers/editproducts')
const {delproduct}=require('./controllers/delproducts')
const { signup } = require('./controllers/signup')
const { cart } = require('./controllers/cart')
const { getcart } = require('./controllers/getcart')
const role=require('./controllers/role')
const { urlencoded } = require('express')
const {auth}=require('./middleware/auth')
app.post('/login',login)//both
app.get('/products',auth,products)//buyer
app.post('/addproducts',products)//seller
app.get('/get',auth,getproducts)//seller
app.post('/edit',editproducts)//seller
app.get('/getproduct/:id',getproductbyid)
app.post('/delete',delproduct)//seller
app.post('/signup',signup)
app.post('/cart',cart)
app.post('/getcart',getcart)
app.post('/addrole',auth,role.addrole)
app.post('/deleterole',auth,role.deleterole)
app.listen(5000,()=>
{
    console.log("server started at 5000")
})