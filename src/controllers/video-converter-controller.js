// Importar a biblioteca ytdl-core para interagir facilmente com vídeos do YouTube
// Import the ytdl-core library to easily interact with YouTube videos
const ytdl =  require('ytdl-core');

// Importar o módulo 'path' para manipulação de caminhos para os ficheiros
// Import the ‘path’ module for manipulating file paths
const path = require('path');

// Importar o módulo 'fs' para leitura e escrita nos ficheiros
// Import the 'fs' module for file reading and writing
const fs = require('fs');

let downloadStatus = {
    inProgress: false,
    message: '',
}

// Função assíncrona 'convertVideo' que processa a conversão do vídeo
// Recebe dois parâmetros: req (pedido) e res (resposta) para gerir a solicitação HTTP.
// Asynchronous function ‘convertVideo’ that processes the video conversion
async function convertVideo(req, res) {
    
    const { videoUrl } = req.body;

    // Verifica se o link do vídeo foi fornecido; se não, retorna uma resposta HTTP 400 com mensagem de erro
    // Checks if the video link was provided; if not, returns an HTTP 400 response with an error message
    if (!videoUrl) {
        return res.status(400).json({ message: 'Video URL is required'});
    }

    downloadStatus.inProgress = true;
    downloadStatus.message = 'Conversion in progress...';

    try {
        const videoInfo = await ytdl.getInfo(videoUrl);
        const fileName = `${videoInfo.videoDetails.title}.mp3`;
        const outputPath = path.join('public', 'downloads', fileName);

        const audioStream = ytdl(videoUrl, { filter: 'audioonly' });
        const writeStream = fs.createWriteStream(outputPath);

        audioStream.pipe(writeStream); // Conecta os dois fluxos (audioStream and writeStream) | Connects the two flows

        // Quando a conversão for concluída, a variável inProgress é atualizada para refletir o estado final e envia mensagem de sucesso
        // When the conversion is complete, the inProgress variable is updated to reflect the final state and sends a success message
        writeStream.on('finish', () => {
            downloadStatus.inProgress = false;
            downloadStatus.message = 'Conversion successful';
        });

        // Se algo falhar no processo de conversão, a variável inProgress é atualizada para refletir o estado final e mostrar uma mensagem de erro sobre o estado do download
        // If something fails in the conversion process, the download status is changed and an error message about the download status is displayed.
        writeStream.on('error', () => {
            downloadStatus.inProgress = false;
            downloadStatus.message = 'Error during conversion';
        });

        res.status(200).join({ message: 'Conversion started', downloadUrl: `/public/downloads/${fileName}` });
    } catch (error) {
        res.status(500).json({ message: 'Error during conversion', error});
    }
}

// Função para eliminar o ficheiro temporário após a conversão
// Function to delete the temporary file after conversion
const removeTempFile = (fileName) => {
    const filePath = path.join('public', 'downloads', fileName);
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file: ', err);
        } else {
            console.log('File deleted: ', fileName);
        }
    });
};



// Endpoint GET /status
// Retorna o status atual da conversão, seja ele em andamento ou finalizado.
// Returns the current status of the conversion, either in progress or finalised.
app.get('/status', (req, res) => { 
    res.status(200).json(downloadStatus);
})

module.exports = { convertVideo };
