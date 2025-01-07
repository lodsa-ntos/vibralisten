// Importar o módulo Express para gerir as rotas
// Import the Express library to manage routes
const express = require('express');

// Importar a função de conversão de vídeo do controlador
// Import the video conversion function from the controller
const { convertVideo } = require('../controllers/video-converter-controller')

// Criar uma instância do router Express para definir rotas
// Create an Express router instance to define routes
const router = express.Router();

// Rota para converter vídeos: aceita pedidos POST e utiliza a função convertVideo como middleware
// Route to convert videos: handles POST requests and uses the convertVideo function as middleware
router.post('/convert', convertVideo);

// Exportar o router para ser utilizado em outros ficheiros
// Export the router to be used in other files
module.exports = router;
