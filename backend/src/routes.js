const express = require('express');

// import os Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/**
 *
 *   Tipos de Paramêtros:
 *
 *   Query Paramns: Paramêtros nomeados enviados na rota após "?" (Filtros,Páginação).
 *   Route Paramns: Paramêtros utilizado para identificar recursos.
 *   Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 *
 **/
// declaraco/instalizacao do Router
const routes = express.Router();

/*
Login
*/
routes.post('/sessions', SessionController.create);

/*
    Methodo Get : para verificar as Ongs Cadastradas no sistema
*/
routes.get("/ongs", OngController.index);

/*
    Methodo Post usando o RequestBody : para cadastrar no sistema uma Ong, que apos o seu cadastro retorna o id ( randomly generated )
*/
routes.post("/ongs", OngController.create);

/*
    Methodo Get : para verificar os casos no sistema
*/
routes.get("/incidents", IncidentController.index);

/*
Methodo Post usando o RequestBody : para cadastrar um caso no sistema com a ong autenticada
*/
routes.post("/incidents", IncidentController.create);

/*
Metodo delete usado para eleminar um caso especifico ( usando o id da mesma)
*/

routes.delete("/incidents/:id", IncidentController.delete);

/*
    Methodo Get : para verificar casos de uma ong especifica
*/
routes.get("/incidents/profile", ProfileController.index);

// Exportar as rotas
module.exports = routes;