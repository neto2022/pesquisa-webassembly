import fs from "fs";

// Inicializando memória para o WebAssembly
const memory = new WebAssembly.Memory({ initial: 1, maximum: 256 });

// Função simulada para o `fd_write`, usada para redirecionar saídas WASI
function fdWrite(fd, iovs, iovsLen, nwritten) {
  const text = new TextDecoder("utf8").decode(
    new Uint8Array(memory.buffer, iovs, iovsLen)
  );
  console.log("WASI output:", text);
  return 0; // Retorna 0 para sucesso
}

// Configurando os imports para o WebAssembly
const imports = {
  wasi_snapshot_preview1: {
    fd_write: fdWrite, // Função para saída padrão
  },
  env: {
    memory: memory, // Memória compartilhada
    _emscripten_memcpy_js: (dest, src, len) => {
      new Uint8Array(memory.buffer, dest, len).set(
        new Uint8Array(memory.buffer, src, len)
      );
      return dest;
    },
  },
};

// Lendo e instanciando o arquivo WebAssembly
fs.readFile("./bb.wasm", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo .wasm:", err);
    return;
  }

  WebAssembly.instantiate(data, imports).then(({ instance }) => {
    const bubbleSort = instance.exports.bubbleSort; // Função exportada

    // Configurando os dados na memória
    const memoryView = new Uint32Array(memory.buffer);
    const array = [5, 3, 8, 6, 2];
    const arrayPointer = 0;

    // Verificar se há espaço suficiente na memória para o array
    if (arrayPointer + array.length > memoryView.length) {
      console.error("Memória insuficiente para o array.");
      return;
    }

    // Copiar o array para a memória
    memoryView.set(array, arrayPointer);

    // Chamar a função de ordenação
    bubbleSort(arrayPointer, array.length);

    // Ler o array ordenado da memória
    const sortedArray = memoryView.slice(arrayPointer, arrayPointer + array.length);
    console.log("Sorted array:", sortedArray);
  }).catch((e) => {
    console.error("Erro ao instanciar o WebAssembly:", e);
  });
});
