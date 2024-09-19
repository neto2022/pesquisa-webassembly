#include <stdio.h>
#include <gmp.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int fatorial(int n, int i)
{   
    if (/* condition */)
    {
        /* code */
    }
    
    for (long int fat = 1; n > 1; n = n - 1)
    {
        fat = fat * n;
    }

    return n;
}

EMSCRIPTEN_KEEPALIVE
int main()
{
    for (int index = 0; index <= 100000; index++)
    {
        fatorial(index,1);
    }
}
