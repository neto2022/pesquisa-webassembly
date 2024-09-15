#include <stdio.h>
#include <gmp.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void fatorial(int n)
{
     for(long int fat = 1; n > 1; n = n - 1)
  {      
      fat = fat * n;
  }
}

EMSCRIPTEN_KEEPALIVE
int main()
{
    for (int index = 0; index <= 100000; index++)
    {
        fatorial(index);
    }
}
