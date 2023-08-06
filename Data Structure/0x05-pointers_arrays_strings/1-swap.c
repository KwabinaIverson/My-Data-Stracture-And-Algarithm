#include "main.h"

/**
 * swap_int - swap values of two inputs
 * @a: First integer to swap
 * @b: Second integer to swap
 */
void swap_int(int *a, int *b)
{
	int tmp;

	tmp = *a;
	*a = *b;
	*b = tmp;
}
