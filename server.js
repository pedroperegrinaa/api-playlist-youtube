import app from './app.js';

const port = 3004;

app.listen(port, function() {
    console.log(`Escutando na porta ${port}`);
    console.log(`http://localhost:${port}`);
})