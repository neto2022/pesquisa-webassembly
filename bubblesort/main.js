import fs from 'fs';
import readline from 'readline';
import bubbleSort from './b.js';

// Verificar se o arquivo foi fornecido como argumento
const filePath = process.argv[2];
if (!filePath) {
    console.error('Por favor, forneça o caminho para o arquivo como argumento.');
    process.exit(1);
}

// Criar um stream de leitura do arquivo
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// Usar readline para processar o arquivo linha por linha
const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity, // Para tratar quebras de linha em diferentes sistemas operacionais
});

const numbers = [];

// Ler o arquivo linha por linha e converter os números para um array
rl.on('line', (line) => {
    const lineNumbers = line.split(/\s+/).map(Number); // Converter números na linha
    numbers.push(...lineNumbers); // Adicionar ao array principal
});

rl.on('close', () => {
    console.log('Arquivo lido com sucesso.');
    console.log('Quantidade de números:', numbers.length);

    console.log('Array antes da ordenação (primeiros 10 números):', numbers.slice(0, 10));

    // Ordenar os números usando bubbleSort
    bubbleSort(numbers);

    console.log('Array após a ordenação (primeiros 10 números):', numbers.slice(0, 10));
});
