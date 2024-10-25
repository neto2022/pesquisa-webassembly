node .\wasm2x2.js
node .\bench2x2.js
node .\wasm5x5.js
node .\bench5x5.js

//emcc ..\pesquisa-webassembly\bench5x5.c -o bench5x5.js -s EXPORTED_FUNCTIONS='["_main", "_fatorial","_matriz_multiplicacao"]' && emcc ..\pesquisa-webassembly\bench2x2.c -o bench2x2.js -s EXPORTED_FUNCTIONS='["_main", "_fatorial","_matriz_multiplicacao"]'
