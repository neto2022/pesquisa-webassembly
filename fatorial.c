#include <stdio.h>
#include <gmp.h>

void fatorial(int n, mpz_t result) {
    mpz_init_set_ui(result, 1); // Initialize result to 1
    for (int i = 2; i <= n; ++i) {
        mpz_mul_ui(result, result, i); // result *= i
    }
}

int main() {
    int n = 1000000;
    mpz_t result;
    fatorial(n, result);
    
    // Print the result
    gmp_printf("Factorial of %d is: %Zd\n", n, result);
    
    // Clear memory
    mpz_clear(result);
    
    return 0;
}