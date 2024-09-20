const memory = new WebAssembly.Memory({ initial: 256 });

const importObject = {
  wasi_snapshot_preview1: {
    fd_write: (fd, iov, iovcnt, pnum) => {
      const text = new TextDecoder().decode(new Uint8Array(memory.buffer, iov, iovcnt));
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
      console.log(`Seeking in file descriptor ${fd} with offset ${offset} and whence ${whence}`);
      return 0; // Return 0 for success
    },
  },
  env: {
    memory: memory,
    table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),
    _abort_js: () => {
      console.error('Abort called from WebAssembly');
    },
    _emscripten_memcpy_js: (dest, src, num) => {
      const mem = new Uint8Array(memory.buffer);
      mem.set(mem.subarray(src, src + num), dest);
      return dest;
    },
    _emscripten_runtime_keepalive_clear: () => {
      console.log('Keepalive clear called');
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

fetch('fatorial.wasm')
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => {
    const { instance } = result;

    const memoriaAntes = performance.memory.usedJSHeapSize;
    const inicio = performance.now();

    const n = 100000;
    const resultadoPtr = instance.exports._malloc(mpz_size(null) * 4);
    const resultadoGmp = new Uint8Array(memory.buffer, resultadoPtr, mpz_size(null) * 4);
    const resultadoMpz = new Pointer(resultadoGmp);

    instance.exports.fatorial(resultadoMpz, n);

    const resultadoStr = instance.exports._mpz_get_str(null, 10, resultadoMpz);
    console.log(`O fatorial de ${n} é ${resultadoStr}`);

    instance.exports._free(resultadoPtr);

    const fim = performance.now();
    const tempoDeExecucaoWasm = fim - inicio;

    const memoriaDepois = performance.memory.usedJSHeapSize;

    const resultado = document.getElementById('wasm');
    resultado.innerHTML = `Tempo de execução: ${tempoDeExecucaoWasm} MS WASM <br>
      Uso de memória: ${((memoriaDepois - memoriaAntes) / 1048576)} MB WASM`;
  })
  .catch((error) => {
    console.error('Error instantiating WebAssembly module:', error);
  });