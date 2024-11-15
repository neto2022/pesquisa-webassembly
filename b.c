#include <stdio.h>
#include <stdlib.h>
// #include <emscripten.h>


void bubbleSort(int *arr, int n) {
    int temp;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// EMSCRIPTEN_KEEPALIVE
int main() {
    FILE *file = fopen("numeros.txt", "r");
    if (file == NULL) {
        printf("Erro ao abrir o arquivo!\n");
        return 1;
    }

    int *numbers = NULL;
    int size = 0;
    int num;

    // Lendo números do arquivo e expandindo o array conforme necessário
    while (fscanf(file, "%d", &num) == 1) {
        int *temp = realloc(numbers, (size + 1) * sizeof(int));
        if (temp == NULL) {
            printf("Erro de memória!\n");
            free(numbers);
            fclose(file);
            return 1;
        }
        numbers = temp;
        numbers[size++] = num;
    }
    fclose(file);

    // Ordenando os números com Bubble Sort
    bubbleSort(numbers, size);

    // Exibindo os números ordenados
    printf("Números ordenados:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    // Liberando a memória alocada
    free(numbers);
    return 0;
}
