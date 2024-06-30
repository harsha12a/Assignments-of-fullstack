const exp = require('express');
let app = exp();
app.use(exp.json())

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Desktop", price: 70000 },
    { id: 4, name: "Tablet", price: 30000 },
    { id: 5, name: "Watch", price: 10000 },
    { id: 6, name: "Charger", price: 2000 },
    { id: 7, name: "Headphone", price: 5000 },
    { id: 8, name: "Speaker", price: 2000 }
]

app.get('/product',(req,res)=>{
    res.send({message:'All Products',payload:products})
})

app.get('/product/:id',(req,res)=>{
    let idUrl=Number(req.params.id)
    let inProd=products.find((prod)=>prod.id===idUrl)
    if(inProd===undefined){
        res.send({message:'Product not found'})
    }
    else{
        res.send({message:'Product found',payload:inProd})
    }
})

app.post('/product',(req,res)=>{
    let newProd=req.body
    products.push(newProd)
    res.send({message:'Product added',payload:newProd})
})

app.put('/product',(req,res)=>{
    let editProd=req.body
    let ind=products.findIndex((prod)=>prod.id===editProd.id)
    if(ind===-1){
        res.send({message:"Product not found"})
    }
    else{
        products[ind]=editProd
        res.send({message:"Product updated",payload:editProd})
    }
})

app.delete('/product/:id',(req,res)=>{
    let idUrl=Number(req.params.id)
    let ind=products.findIndex((prod)=>prod.id===idUrl)
    if(ind===-1){
        res.send({message:"Product not found"})
    }
    else{
        products.splice(ind,1)
        res.send({message:"Product deleted"})
    }
})

app.listen(3500)