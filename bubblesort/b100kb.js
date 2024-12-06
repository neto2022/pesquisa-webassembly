import bubbleSort from "./b.js";
import { readFileSync } from "fs";

bubbleSort(readFileSync("./numeros100kb.txt"));