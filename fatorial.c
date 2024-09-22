#include <stdio.h>
#include "gmp.h"
#include <stdlib.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
char* fatorial(int n) {
    mpz_t result;
    mpz_init(result); // Inicializa a variável do tipo mpz_t
    mpz_set_ui(result, 1); // Inicializa result como 1

    // Loop para calcular o fatorial de n
    for (int i = 1; i <= n; i++) {
        mpz_mul_ui(result, result, i);
    }

    // Converte o resultado para string
    char* str = mpz_get_str(NULL, 10, result);
    mpz_clear(result); // Libera a memória alocada por result
    return str; // Retorna o resultado como string
}

EMSCRIPTEN_KEEPALIVE
int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Por favor, forneça um número.\n");
        return 1;
    }

    int n = atoi(argv[1]); // Converte o argumento fornecido para inteiro
    char* result = fatorial(n); // Calcula o fatorial

    printf("%s\n", result); // Imprime o resultado
    free(result); // Libera a memória alocada para a string do resultado

    return 0;
}
