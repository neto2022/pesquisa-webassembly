import init, { fatorial, malloc, mpz_init, mpz_get_str, mpz_clear, free } from './fatorial.js';

async function calculateFactorial() {
  await init();

  const n = parseInt(document.getElementById('inputNumber').value);
  const result = malloc(4); // Aloca espaço para o resultado

  mpz_init(result);
  fatorial(result, n);

  const strPtr = malloc(20); // Aloca espaço para a string do resultado
  const resultStr = mpz_get_str(strPtr, 10, result);

  document.getElementById('result').innerText = "Fatorial: " + resultStr;

  mpz_clear(result);
  free(result);
  free(strPtr);
}

calculateFactorial()