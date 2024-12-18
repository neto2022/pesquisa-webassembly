const fs = require("fs");

require("wabt")().then(wabt => {
    var wasm = fs.readFileSync('bench2x2.wasm'); // a buffer holding the contents of a wasm file
  
    var myModule = wabt.readWasm(wasm, { readDebugNames: true });
    myModule.applyNames();
  
    var wast = myModule.toText({ foldExprs: false, inlineExport: false });
  
    console.log(wast);
  });