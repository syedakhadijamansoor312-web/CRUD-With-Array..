import express from "express";
const app = express();
app.use(express.json());

 let products=[
    {
id:1,
name:"OPPO Reno 15",
price:158000,
imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1fYlQXZPsRFivZX9dbmmf1aaXkyD9v-1ZPlCO-9I6w&s=10",
desc:"The OPPO Reno15 5G is a mid-range smartphone featuring a 6.59-inch 120Hz AMOLED display, a Snapdragon 7 Gen 4 processor, a triple rear camera system (50MP main, 50MP telephoto, and 8MP ultra-wide), a 50MP front camera, and a large 6,500 mAh battery with 80W fast charging. "
    },
    
    {
id:2,
name:"OPPO A6",
price:75000,
imageurl:"https://www.oppo.com/content/dam/oppo/product-asset-library/a/a6-pro-series/en/a6-pro/red-pink-blue-tai/v1/assets/images-kv-mo-kv-l4-effb71.jpg",
desc:"The Oppo A6 is a budget-friendly smartphone focused on durability and battery life.It features a massive 7000mAh battery, a 120Hz display, an IP69 water and dust resistance rating, and a 50MP main camera."
     }
];  


app.get("/products",(req,res)=>{
    res.json(products);
});

   app.post("/products",(req,res)=>{
    const newproduct =req.body;
    products.push(newproduct);
    res.status(201).json(newproduct);
});
 app.delete("/products/:id",(req,res)=>{
    const {id} = req.params;
    products = products.filter(product => product.id !== parseInt(id));
    res.status(204).send();
});
app.put("/products/:id",(req,res)=>{
    const {id} = req.params;
    const updatedProduct  = req.body;
    console.log(updatedProduct)
    const index = products.findIndex((product) => product.id === parseInt(id));
    if(index!== -1)
{
    products[index] = {... products[index],...updatedProduct};
    res.json(products[index]);
}   
else{
    res.status(404).json({message:"Product not found"})
} 
});

app.listen(5050,()=>{
    console.log ("server is running on port 5050")
});

