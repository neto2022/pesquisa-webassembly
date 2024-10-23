#include <stdio.h>

// Função para calcular pi usando a série de Leibniz
double calcular_pi(int iteracoes)
{
    double pi = 0.0;
    int sinal = 1;
    for (int i = 0; i < iteracoes; i++)
    {
        pi += sinal * 4.0 / (2.0 * i + 1.0);
        sinal = -sinal; // Alterna entre +1 e -1
    }
    return pi;
}

int main()
{
    int digitos = 100000;

    // Define um número fixo de iterações adequado
    int iteracoes = 10000000; // 10 milhões de iterações para boa precisão

    // Calcula o valor de pi
    double pi = calcular_pi(iteracoes);

    // Exibe o valor de pi com o número de casas decimais desejado pelo usuário
    printf("O valor aproximado de pi é: %.*f\n", digitos, pi);

    return 0;
}
