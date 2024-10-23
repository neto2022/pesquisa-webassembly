import fs from "fs";

const imports = {
  env: {
    memory: new WebAssembly.Memory({ initial: 0, maximum: 256 })
  },
};

// Lendo o arquivo .wasm usando fs.readFile
fs.readFile("./bench5x5.wasm", (err, data) => {
  // Carrega e instancia o módulo WebAssembly
  WebAssembly.instantiate(data, imports).then((result) => {
    result.instance.exports.main();
  });
});
