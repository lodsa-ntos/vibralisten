// Importar a biblioteca ytdl-core para interagir facilmente com vídeos do YouTube
// Import the ytdl-core library to easily interact with YouTube videos
const ytdl =  require('ytdl-core');

// Importar o módulo 'path' para manipulação de caminhos para os ficheiros
// Import the ‘path’ module for manipulating file paths
const path = require('path');

// Importar o módulo 'fs' para leitura e escrita nos ficheiros
// Import the 'fs' module for file reading and writing
const fs = require('fs');

// expressão de função assíncrona atribuída a duas variáveis
// cria uma vinculação de uma nova função assíncrona a um determinado nome.
async function convertVideo(req, res) {
    
    const { videoUrl } = req.body;

    // obrigatório fornecer o link do vídeo
    if (!videoUrl) {
        return res.status(400).json({ message: 'Video URL is required'});
    }

    try {
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to process the video', error});
    }
}


module.exports = { convertVideo };
