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
    // Inicializa a semente do gerador de números aleatórios com a hora atual
    srand(time(0));

    // limita o número aleatório de 0 ate 8
    int limite = 9;

    // Exemplo de multiplicação de matrizes
    int a[2][2] = {{fatorial(rand() % limite), fatorial(rand() % limite)}, {fatorial(rand() % limite), fatorial(rand() % limite)}};
    int b[2][2] = {{fatorial(rand() % limite), fatorial(rand() % limite)}, {fatorial(rand() % limite), fatorial(rand() % limite)}};
    int result[2][2];

    // Realiza a multiplicação das matrizes
    matriz_multiplicacao(a, b, result);

    // Imprime o resultado da multiplicação de matrizes
    /*printf("Resultado da multiplicação das matrizes:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("result[%d][%d] = %d\n", i, j, result[i][j]);
        }
    }*/

    return 0;
}
