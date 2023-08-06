#include "main.h"

/**
 * _puts - prints strings to stdout
 * @str: Pointer to string
 */
 void _puts(char *str)
{
	int i, j;
	char *fail = "NULL";

	if (str != NULL)
		for (i = 0; str[i] != '\0'; i++)
			_putchar(str[i]);
	else
		for (j = 0; fail[j] != '\0'; j++)
			_putchar(fail[j]);
	_putchar('\n');
}
