const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// uso de cors e declaracao do origin site para poder ter acesso
app.use(cors({
    origin: 'herokuapp.com'
}));
//declarar que ira usar o json
app.use(express.json());

// a app usar rotas
app.use(routes);

//  escutar a porta 3333
app.listen(3333);