#include <gmp.h>
#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void fatorial(mpz_t result, unsigned int n) {
    mpz_set_ui(result, 1); // Inicializa o resultado como 1
    for (unsigned int i = 1; i <= n; i++) {
        mpz_mul_ui(result, result, i); // result *= i
    }
}

