let data = {
    shops: [
      { shopId: 1, name: "Sector 25, Gurgaon", rent: 28500 },
      { shopId: 2, name: "Sector 53, Gurgaon", rent: 37400 },
      { shopId: 3, name: "Greater Kailash, Delhi", rent: 63100 },
      { shopId: 4, name: "Mall of India, Noida", rent: 54200 },
    ],
    products: [
      {
        productId: 1,
        productName: "Pepsi Can",
        category: "Soft Drinks",
        description: "300ml",
      },
      {
        productId: 2,
        productName: "Pepsi PET",
        category: "Soft Drinks",
        description: "500ml",
      },
      {
        productId: 3,
        productName: "Diet Coke",
        category: "Soft Drinks",
        description: "300ml Can",
      },
      {
        productId: 4,
        productName: "Mazaa",
        category: "Soft Drinks",
        description: "500ml bottle",
      },
      {
        productId: 5,
        productName: "Dairy Milk",
        category: "Chocolate",
        description: "25 g",
      },
      {
        productId: 6,
        productName: "Fruit & Nut",
        category: "Chocolate",
        description: "60 g",
      },
      {
        productId: 7,
        productName: "Silk - Crackles",
        category: "Chocolate",
        description: "100g",
      },
      {
        productId: 8,
        productName: "Perk",
        category: "Chocolate",
        description: "40 g",
      },
    ],
    purchases: [
      {
        purchaseId: 1,
        shopId: 1,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 2,
        shopId: 1,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 3,
        shopId: 1,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 4,
        shopId: 1,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 5,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 6,
        shopId: 2,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 7,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 8,
        shopId: 2,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 9,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 10,
        shopId: 2,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 11,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 12,
        shopId: 2,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 13,
        shopId: 1,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 14,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 15,
        shopId: 1,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 16,
        shopId: 1,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 17,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 18,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 19,
        shopId: 4,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 20,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 21,
        shopId: 3,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 22,
        shopId: 3,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 23,
        shopId: 4,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 24,
        shopId: 1,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 25,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 26,
        shopId: 4,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 27,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 28,
        shopId: 1,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 29,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 30,
        shopId: 1,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 31,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 32,
        shopId: 2,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 33,
        shopId: 2,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 34,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 35,
        shopId: 3,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 36,
        shopId: 4,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 37,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 38,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 39,
        shopId: 4,
        productid: 8,
        quantity: 15,
        price: 12,
      },
      {
        purchaseId: 40,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 41,
        shopId: 3,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 42,
        shopId: 3,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 43,
        shopId: 1,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 44,
        shopId: 1,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 45,
        shopId: 3,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 46,
        shopId: 2,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 47,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 48,
        shopId: 4,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 49,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 50,
        shopId: 2,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 51,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 52,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 53,
        shopId: 3,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 54,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 55,
        shopId: 1,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 56,
        shopId: 1,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 57,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 58,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 59,
        shopId: 4,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 60,
        shopId: 4,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 61,
        shopId: 3,
        productid: 1,
        quantity: 10,
        price: 25,
      },
      {
        purchaseId: 62,
        shopId: 4,
        productid: 2,
        quantity: 15,
        price: 32,
      },
      {
        purchaseId: 63,
        shopId: 1,
        productid: 3,
        quantity: 5,
        price: 27,
      },
      {
        purchaseId: 64,
        shopId: 3,
        productid: 4,
        quantity: 20,
        price: 31,
      },
      {
        purchaseId: 65,
        shopId: 3,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 66,
        shopId: 4,
        productid: 5,
        quantity: 15,
        price: 8,
      },
      {
        purchaseId: 67,
        shopId: 2,
        productid: 5,
        quantity: 10,
        price: 8,
      },
      {
        purchaseId: 68,
        shopId: 1,
        productid: 5,
        quantity: 5,
        price: 8,
      },
      {
        purchaseId: 69,
        shopId: 3,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 70,
        shopId: 1,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 71,
        shopId: 2,
        productid: 8,
        quantity: 10,
        price: 12,
      },
      {
        purchaseId: 72,
        shopId: 2,
        productid: 6,
        quantity: 5,
        price: 40,
      },
      {
        purchaseId: 73,
        shopId: 2,
        productid: 1,
        quantity: 20,
        price: 25,
      },
      {
        purchaseId: 74,
        shopId: 1,
        productid: 2,
        quantity: 20,
        price: 32,
      },
      {
        purchaseId: 75,
        shopId: 3,
        productid: 3,
        quantity: 30,
        price: 27,
      },
      {
        purchaseId: 76,
        shopId: 4,
        productid: 4,
        quantity: 40,
        price: 31,
      },
      {
        purchaseId: 77,
        shopId: 2,
        productid: 8,
        quantity: 20,
        price: 12,
      },
      {
        purchaseId: 78,
        shopId: 3,
        productid: 8,
        quantity: 15,
        price: 11,
      },
      {
        purchaseId: 79,
        shopId: 4,
        productid: 8,
        quantity: 15,
        price: 12,
      },
      {
        purchaseId: 80,
        shopId: 1,
        productid: 6,
        quantity: 5,
        price: 40,
      },
    ],
  };



let express=require("express")
let app=express()
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,POST,OPTIONS,PUT,PATCH,DELETE,HEAD"
  )
    res.header(
      "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, accept"
    );
    next();
});
//const port=2410;
var port=process.env.PORT || 2410
app.listen(port,()=>console.log(`Listening on port ${port}`))
app.get("/shops",function(req,res){
    res.send(data.shops)
})

app.post("/shops",function(req,res){

    let body=req.body
    //console.log(body)
    let maxid=data.shops.reduce(
        (acc,curr)=>(curr.shopId>=acc?curr.shopId:acc),
        0
    )
    console.log(maxid)
    let newid=maxid+1
    let newShop={shopId:newid,...body}
    console.log(newShop)
    data.shops.push(newShop)

    res.send(newShop)

})

app.get("/products",function(req,res){
    res.send(data.products)
})


app.post("/products",function(req,res){

    let body=req.body
    //console.log(body)
    let maxid=data.products.reduce(
        (acc,curr)=>(curr.productId>=acc?curr.productId:acc),
        0
    )
    console.log(maxid)
    let newid=maxid+1
    let newProd={productId:newid,...body}
    console.log(newProd)
    data.products.push(newProd)

    res.send(newProd)

})
app.get("/products/:id",function(req,res){
  let id=+req.params.id
  let p=data.products.find((p)=>{
    return p.productId==id
  })
  console.log(p)
  res.send(p)
})

app.put("/products/:id",function(req,res){
    let id=+req.params.id
    console.log(id)
    let body=req.body
    let index=data.products.findIndex((p)=>{
        return p.productId===id
    })
    
//console.log(index)
    
    let updated={productId:id,...body}
    console.log(updated)
    data.products[index]=updated
    res.send(updated)
   
})

app.get("/purchases",function(req,res){
  let shop=req.query.shop;
  let product=req.query.product
  let sort=req.query.sort
  let arr1=data.purchases


  if(shop){
    let idshop=data.shops.find((p)=>{
      return p.name==shop
    })
    console.log(idshop?.shopId)
arr1=arr1.filter((p)=>{
  return p.shopId==idshop?.shopId
})
  }
if(product){
//console.log(product)
  let productArr=product.split(",")
let idprod=data.products.find((p)=>{
  return p.productName==product
})
console.log(idprod)
     arr1=arr1.filter((st)=>productArr.find((c1)=>{
      let s=data.products.find((p)=>{
        return p.productName==c1
      })
      return s.productId===st.productid
     }))
    

}
if(sort=="QtyAsc"){
arr1=arr1.sort((a,b)=>a.quantity-b.quantity)
}
if(sort=="QtyDesc"){
arr1=arr1.sort((a,b)=>-(a.quantity-b.quantity))
}
if(sort=="ValueAsc"){
arr1=arr1.sort((a,b)=>a.quantity*a.price-b.quantity*b.price)
}
  if(sort=="ValueDesc"){
arr1=arr1.sort((a,b)=>-(a.quantity*a.price-b.quantity*b.price))
}
    res.send(arr1)
})
app.get("/purchases/shops/:id",function(req,res){
  let id=req.params.id;
  let shop=data.purchases.filter((p)=>{
    return p.shopId==id
  })
res.send(shop)

})

app.get("/purchases/products/:id",function(req,res){
  let id=req.params.id
  let product=data.purchases.filter((p)=>{
    return p.productid==id
  })
  res.send(product)
})
app.post("/purchases",function(req,res){

    let body=req.body
    //console.log(body)
    let maxid=data.purchases.reduce(
        (acc,curr)=>(curr.purchaseId>=acc?curr.purchaseId:acc),
        0
    )
    //console.log(maxid)
    let newid=maxid+1
    let newProd={id:newid,...body}
    console.log(newProd)
    data.purchases.push(newProd)

    res.send(newProd)

})
app.get("/totalPurchase/shop/:id",function(req,res){
  let id=+req.params.id
  //console.log(id)
  let purchase=data?.purchases.filter((p)=>{
    return p.shopId===id
  })

  let prod1=purchase.reduce((acc,curr)=>{
       if(curr.productid==1){
        acc=acc+1
       }
       return acc
  },0)
   
 let prod2=purchase.reduce((acc,curr)=>{
       if(curr.productid==2){
        acc=acc+1
       }
       return acc
  },0)

   let prod3=purchase.reduce((acc,curr)=>{
       if(curr.productid==3){
        acc=acc+1
       }
       return acc
  },0)
   let prod4=purchase.reduce((acc,curr)=>{
       if(curr.productid==4){
        acc=acc+1
       }
       return acc
  },0)
   let prod5=purchase.reduce((acc,curr)=>{
       if(curr.productid==5){
        acc=acc+1
       }
       return acc
  },0)
   let prod6=purchase.reduce((acc,curr)=>{
       if(curr.productid==6){
        acc=acc+1
       }
       return acc
  },0)
   let prod7=purchase.reduce((acc,curr)=>{
       if(curr.productid==7){
        acc=acc+1
       }
       return acc
  },0)
   let prod8=purchase.reduce((acc,curr)=>{
       if(curr.productid==8){
        acc=acc+1
       }
       return acc
  },0)
let item=[{total:prod1,...data.products[0]},
  {total:prod2,...data.products[1]},
  {total:prod3,...data.products[2]},
  {total:prod4,...data.products[3]},
  {total:prod5,...data.products[4]},
  {total:prod6,...data.products[5]},
  {total:prod7,...data.products[6]},
  {total:prod8,...data.products[7]}]
  //console.log(item)
  res.send(item)
})


app.get("/totalPurchase/product/:id",function(req,res){
  let id=+req.params.id
  let purchase=data.purchases.filter((p)=>{
    return p.productid==id
  })
  let shop1=purchase.reduce((acc,curr)=>{
    if(curr.shopId==1){
      acc=acc+1
    }
   return acc
  },0)
  let shop2=purchase.reduce((acc,curr)=>{
    if(curr.shopId==2){
      acc=acc+1
    }
   return acc
  },0)
  let shop3=purchase.reduce((acc,curr)=>{
    if(curr.shopId==3){
      acc=acc+1
    }
   return acc
  },0)
  let shop4=purchase.reduce((acc,curr)=>{
    if(curr.shopId==4){
      acc=acc+1
    }
   return acc
  },0)
  //console.log(shop1)
  let item=[{total:shop1,...data.shops[0]},
    {total:shop2,...data.shops[1]},
    {total:shop3,...data.shops[2]},
    {total:shop4,...data.shops[3]}]
  res.send(item)

})