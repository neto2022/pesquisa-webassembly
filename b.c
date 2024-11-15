#include <stdio.h>
#include <stdlib.h>
//#include <emscripten.h>

//EMSCRIPTEN_KEEPALIVE
void bubbleSort(int *arr, int n)
{
    int temp;
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

//EMSCRIPTEN_KEEPALIVE
int main()
{
    FILE *file = fopen("d:/Estudos/pesquisa-webassembly/numeros.txt", "r");

    if (file == NULL)
    {
        printf("Erro ao abrir o arquivo!\n");
        return 1;
    }

    int *numbers = malloc(100 * sizeof(int)); // Allocate memory for numbers
    int size = 0;
    int num;

    // Read numbers from the file
    while (fscanf(file, "%d", &num) == 1)
    {
        numbers[size++] = num;
        if (size % 100 == 0)
        { // Expand array if necessary
            numbers = realloc(numbers, (size + 100) * sizeof(int));
        }
    }
    fclose(file);

    // Sort the numbers using Bubble Sort
    bubbleSort(numbers, size);

    // Free allocated memory
    free(numbers);
}