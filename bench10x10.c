#include <stdio.h>
#include <stdlib.h>
#include <time.h>
// #include <emscripten.h>
// EMSCRIPTEN_KEEPALIVE
unsigned long long fatorial(int n)
{
    if (n == 0)
        return 1;
    return n * fatorial(n - 1);
}
// EMSCRIPTEN_KEEPALIVE
void matriz_multiplicacao(int a[10][10], int b[10][10], int result[10][10])
{
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            result[i][j] = 0;
            for (int k = 0; k < 10; k++)
            {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}
// EMSCRIPTEN_KEEPALIVE
int main()
{
    // Inicializa a semente do gerador de números aleatórios com a hora atual
    srand(time(0));

    // Limita o número aleatório de 0 a 5
    int limite = 6;

    // Exemplo de multiplicação de matrizes 10x10
    int a[10][10];
    int b[10][10];
    int result[10][10];

    // Gera números aleatórios para as matrizes
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            a[i][j] = fatorial(rand() % limite);
            b[i][j] = fatorial(rand() % limite);
        }
    }

    // Realiza a multiplicação das matrizes
    matriz_multiplicacao(a, b, result);

    // Imprime o resultado da multiplicação de matrizes
    /*printf("Resultado da multiplicação das matrizes:\n");
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            printf("result[%d][%d] = %llu ", i, j, (unsigned long long)result[i][j]);
            if (j == 9) printf("\n");
        }
    }*/

    return 0;
}