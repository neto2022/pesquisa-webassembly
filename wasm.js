import fs from 'fs';
import { performance } from 'perf_hooks';

const inicio = performance.now();
const memoriaAntes = process.memoryUsage().heapUsed;

const memory = new WebAssembly.Memory({ initial: 512 });

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
  },
};

// Read the WASM file as a Buffer
const wasmBuffer = fs.readFileSync("./bench.wasm");

WebAssembly.instantiate(wasmBuffer, importObject)
  .then((result) => {
    console.log(`result.instance.exports`, result.instance.exports.fatorial(10));
  })
  .catch(console.error);

const fim = performance.now();
const memoriaDepois = process.memoryUsage().heapUsed;
const tempoDeExecucaoWasm = fim - inicio;

console.log(tempoDeExecucaoWasm);
console.log((memoriaDepois - memoriaAntes) / 1048576);