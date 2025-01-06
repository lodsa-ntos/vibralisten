// importar a configuração principal a partir do ficheiro '.app/'
// import the main configuration from the ‘.app/’ file
const app = require('.app/');

// definir a Porta do servidor e tentar usar a PORTA definida na variável ambiente (process.env.PORT)
/// mas, caso não esteja definida, é utilizada a porta padrão 3000

// set the server PORT and try to use the PORT defined in the environment variable (process.env.PORT)
/// but if it is not set, the default port 3000 is used
const PORT = process.env.PORT || 3000;

// Iniciar o servidor e escutar a porta
// Start the server and listen to the port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

