// Importar a biblioteca ytdl-core para interagir facilmente com vídeos do YouTube
// Import the ytdl-core library to easily interact with YouTube videos
const ytdl =  require('ytdl-core');

// Importar o módulo 'path' para manipulação de caminhos para os ficheiros
// Import the ‘path’ module for manipulating file paths
const path = require('path');

// Importar o módulo 'fs' para leitura e escrita nos ficheiros
// Import the 'fs' module for file reading and writing
const fs = require('fs');

// Define uma função assíncrona 'convertVideo' que processa a conversão do vídeo
// Recebe dois parâmetros: req (pedido) e res (resposta) para gerir a solicitação HTTP.
async function convertVideo(req, res) {
    
    const { videoUrl } = req.body;

    // Verifica se o link do vídeo foi fornecido; se não, retorna uma resposta HTTP 400 com mensagem de erro
// Checks if the video link was provided; if not, returns an HTTP 400 response with an error message
    if (!videoUrl) {
        return res.status(400).json({ message: 'Video URL is required'});
    }

    try {
        const videoInfo = await ytdl.getInfo(videoUrl);
        const fileName = `${videoInfo.videoDetails.title}.mp3`;
        const outputPath = path.resolve('public', 'download', fileName);

        const audioStream = ytdl(videoUrl, { filter: 'audioonly' });
        const writeStream = fs.createWriteStream(outputPath);

        audioStream.pipe(writeStream); // Conecta os dois fluxos | Connects the two flows

        // Quando a conversão for concluída, envia uma resposta com status 200 e mensagem de sucesso
        // Incluir a URL para download do ficheiro convertido.
        
        // When the conversion is complete, sends a response with status 200 and success message
        // Include the URL for downloading the converted file.
        writeStream.on('finish', () => {
            res.status(200).json({ message: 'Conversion successful', downloadUrl: `/downloads${fileName}` });
        });

        // Se algo falhar no processo de conversão, envia uma resposta com status 500 e mensagem de erro
        // If something fails in the conversion process, it sends a response with status 500 and an error message
        writeStream.on('error', () => {
            res.status(500).json({ message: 'Error during conversion', error });
        });

        
    } catch (error) {
        res.status(500).json({ message: 'Failed to process the video', error});
    }
}


module.exports = { convertVideo };
