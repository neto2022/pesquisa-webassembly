#include <stdio.h>

int main() {
    int n, i;
    unsigned long long fatorial = 1; // Usamos unsigned long long para suportar números grandes

    printf("Insira um valor para o qual deseja calcular o fatorial: ");
    scanf("%d", &n);

    // Verifica se o número é negativo
    if (n < 0) {
        printf("Fatorial de um número negativo não existe.\n");
    } else {
        for (i = 1; i <= n; ++i) {
            fatorial *= i; // fatorial = fatorial * i;
        }
        printf("Fatorial de %d = %llu\n", n, fatorial);
    }

    return 0;
}
