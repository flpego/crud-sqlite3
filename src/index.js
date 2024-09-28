require('dotenv').config(); //trae y ejecuta las variables de entorno

const express = require('express'); //llamamos el paquete express
const app = express(); //ejecutamos paquete express
const mainRouter = require('./routes/main.router');
const productsRouter =require('./routes/products.router')

app.use(express.json());

//routes -->
app.use(mainRouter);
app.use(productsRouter);


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`)
});

