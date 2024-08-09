const { exec } = require('child_process');

const numero = 5; // Substitua pelo número desejado

exec(`./fatorial ${numero}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Resultado: ${stdout}`);
});
