#include <stdio.h>
#include <gmp.h>
#include <stdlib.h>

void fatorial(mpz_t result, unsigned int n) {
    mpz_set_ui(result, 1); // Initialize result as 1
    for (unsigned int i = 1; i <= n; i++) {
        mpz_mul_ui(result, result, i); // result *= i
    }
}

int main() {
    mpz_t result;
    mpz_init(result);
    fatorial(result, 5);
    
    // Convert result to string for printing
    char *result_str = mpz_get_str(NULL, 10, result);
    printf("Fatorial de 5: %s\n", result_str);
    
    // Free the string allocated by mpz_get_str
    free(result_str);
    
    mpz_clear(result);
    return 0;
}