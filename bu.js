import fs from "fs";

// Lendo o arquivo .wasm usando fs.readFile
fs.readFile("./bb.wasm", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  // Converte o Buffer para ArrayBuffer
  const arrayBuffer = data.buffer.slice(
    data.byteOffset,
    data.byteOffset + data.byteLength
  );

  // Carrega e instancia o módulo WebAssembly
  WebAssembly.instantiate(arrayBuffer, imports).then((result) => {
        wasi.start(result.instance); // Start WASI instance
        result.instance.exports.main();
      })
      .catch((error) => {
        console.error("Erro ao instanciar o WebAssembly:", error);
      });
});