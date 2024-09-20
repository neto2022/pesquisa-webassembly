#include <gmp.h>
#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void fatorial(int n)
{
    mpz_t resultado;
    mpz_init(resultado);

    mpz_fac_ui(resultado, n); // Calcula o fatorial de n

    mpz_clear(resultado); // Libera a memória alocada
}
