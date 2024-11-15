import { readFileSync } from 'fs';

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca de elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function main() {
    let data;
    try {
        data = readFileSync('./numeros.txt', 'utf8');
    } catch (err) {
        console.error("Erro ao abrir o arquivo!");
        return;
    }

    // Convertendo os dados do arquivo em um array de números
    let numbers = data.split(/\s+/).map(Number).filter(n => !isNaN(n));

    // Ordenando os números com Bubble Sort
    bubbleSort(numbers);

    // Exibindo os números ordenados
    //console.log("Números ordenados:");
    //console.log(numbers.join(" "));
}

main();
