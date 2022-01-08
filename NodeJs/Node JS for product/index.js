const express = require('express');
const req = require('express/lib/request');
const app = express();
let { products } = require('./data')

//Get
app.get('/', (_require, res) => {
    console.log('user hit the resource')
    res.status(200).send('<h1>Home page</h1>');
})

app.get('/todos', (_require, res) => {
    res.status(200).send('<h1>Welcome here!</h1>');
})

//This is show all information
app.get('/todos/products', (_req, res) => {
    const newProducts = products.map((product) => {
        const  {id, name} = product
        return { id, name}
    })

    res.json(newProducts);
});

app.get('/todos/products/:productID', (_request, res) => {
    const productID  = res.send(req.params)
  
    const singleProduct = products.find(
      (product) => {
            return product.id === Number(productID);
        }
    )
    if (!singleProduct) {
      return res.status(404).send('Product Does Not Exist')
    }
  
    return res.json(singleProduct)
});
  
app.get('/todos/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('It work')
});


// app.all('*', (_require, res) => {
//     res.status(404).send('<h2>page is not found</h2>');
// })


app.listen(5000, () => {
    console.log('listening on port 5000')
})