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
void matriz_multiplicacao(int a[5][5], int b[5][5], int result[5][5])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            result[i][j] = 0;
            for (int k = 0; k < 5; k++)
            {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}
// EMSCRIPTEN_KEEPALIVE
int main()
{
    // Exemplo de multiplicação de matrizes 5x5
    int a[5][5];
    int b[5][5];
    int result[5][5];

    // Gera números aleatórios para as matrizes
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            a[i][j] = fatorial(rand() % 15);
            b[i][j] = fatorial(rand() % 15);
        }
    }

    // Realiza a multiplicação das matrizes
    matriz_multiplicacao(a, b, result);

    // Imprime o resultado da multiplicação de matrizes
    /*printf("Resultado da multiplicação das matrizes:\n");
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            printf("result[%d][%d] = %llu \n", i, j, (unsigned long long)result[i][j]);
        }
    }*/

    return 0;
}