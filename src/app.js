// importar o módulo Express para criar o servidor
// import the Express library
const express = require('express');

// Importar as rotas do ficheiro 'convert-link-routes'
// Import the routes from the ‘convert-link-routes’ file
const convertRoutes = require('./routes/convert-link-router');

// Instanciar todos os métodos e  propriedades do Express
// Instantiate all Express methods and properties
const app = express();

// Middleware para processar o corpo dos pedidos como JSON
// Middleware to process the body of requests as JSON
app.use(express.json());

// Define que as rotas da API começarão com '/api'
// Defines that API routes will start with ‘/api’
app.use('/api', convertRoutes);

// Exportar a instância do Express (app) para ser utilizado em outros ficheiros
// Export the Express instance (app) to be used in other files
module.exports = app;