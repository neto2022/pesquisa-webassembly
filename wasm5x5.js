import fs from "fs";

// Criação de memória para o WebAssembly
const memory = new WebAssembly.Memory({ initial: 0, maximum: 256 });
// 0 páginas = 0 MB
// 256 páginas = 16 MB
const importObject = {
  wasi_snapshot_preview1: {
    fd_write: (fd, iov, iovcnt) => {
      const text = new TextDecoder().decode(
        new Uint8Array(memory.buffer, iov, iovcnt)
      );
      console.log(text);
      return 0; // Return 0 for success
    },
    proc_exit: (code) => {
      console.log(`Process exited with code: ${code}`);
    },
    fd_close: (fd) => {
      console.log(`File descriptor ${fd} closed.`);
      return 0; // Return 0 for success
    },
    fd_seek: (fd, offset, whence) => {
      console.log(
        `Seeking in file descriptor ${fd} with offset ${offset} and whence ${whence}`
      );
      return 0; // Return 0 for success
    },
  },
  env: {
    memory,
    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" }),
    _abort_js: () => {
      console.error("Abort called from WebAssembly");
    },
    _emscripten_memcpy_js: (dest, src, num) => {
      const mem = new Uint8Array(memory.buffer);
      mem.set(mem.subarray(src, src + num), dest);
      return dest;
    },
    _emscripten_runtime_keepalive_clear: () => {
      console.log("Keepalive clear called");
    },
    __call_sighandler: (signum) => {
      console.log(`Signal handler called with signal number: ${signum}`);
    },
    emscripten_resize_heap: (size) => {
      console.log(`Resizing heap to size: ${size}`);
      return 1; // Return 1 for success
    },
    // Adicionando a função callable "emscripten_date_now"
    emscripten_date_now: () => {
      return Date.now();
    },
  },
};

// Lendo o arquivo .wasm usando fs.readFile
fs.readFile("./bench5x5.wasm", (err, data) => {
  // Carrega e instancia o módulo WebAssembly
  WebAssembly.instantiate(data, importObject).then((result) => {
    result.instance.exports.main();
  });
});
