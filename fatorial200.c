#include <stdio.h>
#include <gmp.h>

void fatorial(int n)
{
     for(long int fat = 1; n > 1; n = n - 1)
  {      
      fat = fat * n;
  }
}

int main()
{

    for (int index = 0; index <= 200000; index++)
    {
        fatorial(index);
        printf("fatorial C %d", index);
        printf("\n");
    }
}
