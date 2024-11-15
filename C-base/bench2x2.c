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
void matriz_multiplicacao(int a[2][2], int b[2][2], int result[2][2])
{
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            result[i][j] = 0;
            for (int k = 0; k < 2; k++)
            {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

int main()
{
    // Exemplo de multiplicação de matrizes
    int a[2][2];
    int b[2][2];
    int result[2][2];

     for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            a[i][j] = fatorial(rand() % 15);
            b[i][j] = fatorial(rand() % 15);
        }
    }

    // Realiza a multiplicação das matrizes
    matriz_multiplicacao(a, b, result);
    return 0;
}
