#include <stdio.h>
#include <gmp.h>

void fatorial(int n, mpz_t resultado) {
    mpz_set_ui(resultado, 1); // Inicializa o resultado como 1
    for (int i = 1; i <= n; ++i) {
        mpz_mul_ui(resultado, resultado, i); // resultado *= i
    }
}

int main() {
    int n = 100000;
    mpz_t resultado;
    mpz_init(resultado);

    fatorial(n, resultado);

    printf("Fatorial de %d é: ", n);
    mpz_out_str(stdout, 10, resultado); // Imprime o resultado
    printf("\n");

    mpz_clear(resultado);
    return 0;
}
