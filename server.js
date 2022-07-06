import express from 'express';
import Container from './ContainerClass.js'

const app = express();
const port = 8080

const Products = new Container('products','txt');

app.listen(port,()=>{
  console.log(`Server is running and listening on port: ${port}`)
})

server.on("error", error => console.log(`Server error: ${error}`))

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

app.get('/products',async (req,res)=>{
  const products = await Products.getAll();
  res.json(products)
})

app.get('/randomProduct', async (req,res)=>{
  await Products.getFile();
  const random_id = Math.ceil(Math.random() * Products.file.data.length);
  res.json(Products.getById(random_id))
})