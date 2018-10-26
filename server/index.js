const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use( bodyParser.json());

//Connects the connection_string which is in .env to massive
massive( process.env.CONNECTION_STRING )
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch( err => console.log(err) );




app.post( '/api/products', controller.create);
app.get( '/api/products', controller.getAll);
app.get( '/api/products/:id', controller.getOne);
app.put( '/api/products/:id', controller.update);
app.delete('/api/products/:id', controller.delete);





const port = 3535;
app.listen(port, () => {
    console.log(`Eavesdropping... on PORT: ${port}.`)
});