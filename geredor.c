#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    FILE *file = fopen("numeros.txt", "w");
    if (file == NULL) {
        printf("Erro ao criar o arquivo!\n");
        return 1;
    }

    // Semente para números aleatórios
    srand(time(NULL));

    long fileSize = 0;
    const long targetSize = (1024*100) * 1024; // em kilobytes

    while (fileSize < targetSize) {
        // Gera um número aleatório
        unsigned long long number = rand() % 9000000000000000;

        // Escreve o número no arquivo com um espaço
        int bytesWritten = fprintf(file, "%d ", number);
        if (bytesWritten < 0) {
            printf("Erro ao escrever no arquivo!\n");
            fclose(file);
            return 1;
        }

        // Atualiza o tamanho do arquivo
        fileSize += bytesWritten;
    }

    printf("Arquivo 'numeros.txt' gerado com aproximadamente 100 KB.\n");
    fclose(file);
    return 0;
}
