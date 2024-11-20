import fs from "fs";

// Define the imports for the WebAssembly module
const imports = {
  env: {
    memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
  },
};

// Read the .wasm file and instantiate the WebAssembly module
fs.readFile("./bb.wasm", (err, data) => {
  if (err) {
    console.error("Error reading WASM file:", err);
    return;
  }

  WebAssembly.instantiate(data, imports)
    .then((result) => {
      console.log(result.instance.exports.bubbleSort);
    })
    .catch((error) => {
      console.error("Error instantiating WASM module:", error);
    });
});
